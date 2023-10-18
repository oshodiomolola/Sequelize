const { db } = require('./../config')
const sequelize = db.sequelize
const DataTypes = db.DataTypes

const productModel = sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING

    },
    size: {
        type: DataTypes.ENUM('small', 'medium', 'big')
    },
    description: {
        type: DataTypes.STRING,
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.INTEGER
    }

})

module.exports = { productModel }