module.exports = (sequelize, DataTypes) =>{

    let alias = "Character";

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
        name : {
            type: DataTypes.STRING(50),
            allowNull : false
        },
        age : {
            type: DataTypes.INTEGER(2),
            allowNull : false
        },
        weigth : {
            type: DataTypes.INTEGER(3),
            allowNull : false
        },
        history : {
            type: DataTypes.STRING(100),
            allowNull : false
        },
    }

    let config = {
        tableName : "characters",
        timestamps : false
    }

    const Character = sequelize.define(alias, cols, config)

    // Categorie.associate = (models)=>{
    //     Categorie.hasMany(models.Product,{
    //         as : "products",
    //         foreignKey : "id_category"
    //     })
    // }

    return Character

}