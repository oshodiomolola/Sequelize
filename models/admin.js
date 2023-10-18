const { db } = require('../config')
const sequelize = db.sequelize
const DataTypes = db.DataTypes

const categoryModel = sequelize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    }

})
module.exports = { categoryModel }