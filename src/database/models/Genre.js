module.exports = (sequelize, DataTypes) =>{

    let alias = "Genre";

    let cols = {
        id : {
            type: DataTypes.INTEGER.UNSIGNED, 
            allowNull : false,
            autoIncrement : true,
            primaryKey : true,
        },
        name : {
            type: DataTypes.STRING(20),
            allowNull : false
        },
        image : {
            type: DataTypes.STRING(50)
        }
    }

    let config = {
        tableName : "genres",
        timestamps : false
    }

    const Genre = sequelize.define(alias, cols, config)

    // Categorie.associate = (models)=>{
    //     Categorie.hasMany(models.Product,{
    //         as : "products",
    //         foreignKey : "id_category"
    //     })
    // }

    return Genre

}

    
