const db = require('../database/models')


let controller = {
    index : (req, res)=>{
        res.status(200).json({
            conected : true,
        })
    },
    allCharacters : (req, res)=>{
        db.Character.findAll({
            attributes: ['image', 'name']
        })
        .then(characters =>{
            res.status(200).json({
                meta : {
                    status : 200,
                    search : "success",
                },
                data : characters
            })
        })
        .catch(error => res.status(500).json({
            meta : {
                status : 500,
                search : "failure",
                message : "Error finding information"
            },
            error
        }))

    },
    create : (req, res)=>{

        let  {image, name, age, weigth, history, movie_char} = req.body

        db.Character.create({ image, name, age, weigth, history })
        .then(result =>{

            db.Movie.findOne({ where : { title : movie_char }})
            .then(movie =>{

                if (!movie) {
                    db.Movie.create({ title : movie_char, image : "default-image.png", date_create : Date.now(), ranking : 1, id_genre : 1 })
                    .then(newMovie =>{
                        db.Character_movie.create({ id_movie : newMovie.id, id_character : result.id })
                        .then(chmovie =>{
                            res.json({
                                meta : {
                                    status : 200,
                                    search : false,
                                    create : true
                                },
                                newMovie,
                                Character : result
                            
                            })
                        })
                        .catch(error => res.status(500).json({
                            meta : {
                                status : 500,
                                search : "failure",
                                message : "Error create movie_character"
                            },
                            error
                        }))
                    })
                    .catch(error => res.status(500).json({
                        meta : {
                            status : 500,
                            search : "failure",
                            message : "Error create movie"
                        },
                        error
                    }))
                } else{
                    db.Character_movie.create({ id_movie : movie.id, id_character : result.id })
                    .then(chmovie =>{
                        res.json({
                            meta : {
                                status : 200,
                                search : true,
                                create : true
                            },
                            movie,
                            Character : result
                            
                        })
                    })
                    .catch(error => res.status(500).json({
                        meta : {
                            status : 500,
                            search : "failure",
                            message : "Error create character_movie"
                        },
                        error
                    }))
                   
                }
            })
            .catch(error => res.status(500).json({
                meta : {
                    status : 500,
                    search : "failure",
                    message : "Error finding movie"
                },
                error
            }))
        })
        .catch(error => res.status(500).json({
            meta : {
                status : 500,
                search : "failure",
                message : "Error creating character"
            },
            error
        }))
    }

}

module.exports = controller