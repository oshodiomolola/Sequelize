const { db } = require('./../config')
const sequelize = db.sequelize
const DataTypes = db.DataTypes

const shipmentModel = sequelize.define('shipment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    paymentId: {
        type: DataTypes.INTEGER,
        references: {
            model: {
                tableName: "payment"
            },
            key: 'id'
        }
    },
    deliveryDate: {
        type: DataTypes.DATE,
        defaultValue: Date.now()
    }
})

module.exports = { shipmentModel }