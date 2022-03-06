module.exports = (sequelize, DataTypes) =>{

    let alias = "User";

    let cols = {
        id : {
            type: DataTypes.INTEGER.UNSIGNED, 
            allowNull : false,
            autoIncrement : true,
            primaryKey : true,
        },
        name : {
            type: DataTypes.STRING(50),
            allowNull : false
        },
        email : {
            type: DataTypes.STRING(50),
            allowNull : false,
            unique: true
        },
        password : {
            type: DataTypes.STRING(12),
            allowNull : false
        }
    }

    let config = {
        tableName : "users",
        timestamps : false
    }

    const User = sequelize.define(alias, cols, config)

    // Categorie.associate = (models)=>{
    //     Categorie.hasMany(models.Product,{
    //         as : "products",
    //         foreignKey : "id_category"
    //     })
    // }

    return User

}
