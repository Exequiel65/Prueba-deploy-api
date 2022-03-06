module.exports = (sequelize, DataTypes) =>{

    let alias = "Movie";

    let cols = {
        id : {
            type: DataTypes.INTEGER.UNSIGNED, 
            allowNull : false,
            autoIncrement : true,
            primaryKey : true,
        },
        image : {
            type: DataTypes.STRING(50)
        },
        title : {
            type: DataTypes.STRING(50),
            allowNull : false
        },
        date_create : {
            type: DataTypes.DATE,
            allowNull : false
        },
        ranking : {
            type: DataTypes.INTEGER(2),
            allowNull : false
        },
        id_genre : {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull : false
        }
    }

    let config = {
        tableName : "movies",
        timestamps : false
    }

    const Movie = sequelize.define(alias, cols, config)

    // Categorie.associate = (models)=>{
    //     Categorie.hasMany(models.Product,{
    //         as : "products",
    //         foreignKey : "id_category"
    //     })
    // }

    return Movie

}