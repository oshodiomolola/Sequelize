const { db } = require('./../config')
const sequelize = db.sequelize
const DataTypes = db.DataTypes

const paymentModel = sequelize.define('payment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: {
                tableName: "users"
            },
            key: 'id'
        },
        allowNull: false
    },
    orderId: {
        type: DataTypes.INTEGER,
        references: {
            model: {
                tableName: "order"
            },
            key: 'id'
        },
        allowNull: false
    },
    paymentDate:{
        type:DataTypes.DATE
    },
    cardDetials: {
      type: DataTypes.STRING
    },
    reciept: {
      type: DataTypes.STRING
    }

})
module.exports = { paymentModel }