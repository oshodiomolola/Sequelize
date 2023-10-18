const { db } = require('./../config')
const sequelize = db.sequelize
const DataTypes = db.DataTypes

const orderModel = sequelize.define('order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  userId: {
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: {
        tableName: 'users'
      },
      key: 'id'
    },
    allowNull: false
  },
  zipcode: {
    type: DataTypes.INTEGER
  },
  orderDate: {
    type: DataTypes.DATE,
    defaultValue: Date.now()
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  admin_id: {
    type: DataTypes.INTEGER,
    references: {
      model: {
        tableName: 'users'
      },
      key: 'id'
    },
    allowNull: false
  },
  order_status: {
    type: DataTypes.BOOLEAN,
    defaultValue: 'pending'
  }
})

module.exports = { orderModel }