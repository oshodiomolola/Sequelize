const { db } = require('./../config')
const sequelize = db.sequelize
const DataTypes = db.DataTypes

const adminProductModel = sequelize.define('adminProduct', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: {
                tableName: "products"
            },
            key: 'id'
        },
        allowNull:false
    }

})

module.exports = { adminProductModel }