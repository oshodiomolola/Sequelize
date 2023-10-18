const {db} = require('../config')
const bcrypt= require('bcrypt')
const sequelize = db.sequelize
const DataTypes = db.DataTypes
const userModel = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
       
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        unique: true,
       
    },
    phoneNumber: {
        type: DataTypes.STRING,
        unique: true,

    },
    gender: {
        type: DataTypes.ENUM('male', 'female'),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user'
    }

})
userModel.beforeCreate(async(user)=>{
    user.password = await bcrypt.hash(user.password, 12)
})
userModel.prototype.comparePassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword)

}
module.exports = { userModel }