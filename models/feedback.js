const { db } = require('./../config')
const sequelize = db.sequelize
const DataTypes = db.DataTypes

const feedbackModel = sequelize.define('payment', {
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
    orderProductId: {
        type: DataTypes.INTEGER,
        references: {
            model: {
                tableName: "orderedproduct"
            },
            key: 'id'
        },
        allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT,
        defaultValue: 4
    }

})
module.exports = { feedbackModel }