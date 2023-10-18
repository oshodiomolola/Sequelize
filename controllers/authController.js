const jwt = require('jsonwebtoken')
const { userModel } = require('../model/userModel')
const { Model } = require('sequelize')
const isAuthenticated = async (req, res, next) => {
    try {
        const auth = req.headers.authorization
        if (!auth) {
            res.status(401).json({ message: 'kindly login/ sign up' })
        }
        const token = auth.split(' ')[1];
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
        const date = new Date
        const time = parseInt(date.getTime() / 1000)
        const user = await userModel.findOne({ where: { id: decodedToken.id } })

        if (user && decodedToken.iat < time)
            req.user = user
        return next()
    } catch (error) {
        return res.status(500).json({message:'something is wrong', error})

    }
}

const restrictedTo = (role) => {
    try {
        return (req, res, next) => {
            if (!role.includes(req.user.role)) {
                res.status(401).json({ message: 'access denied. you are not authorised to use this resources' })
            }
            next()
        }
    } catch (error) {
        res.status(500).json({  message: "something is wrong", error })
    }

}

module.exports = { isAuthenticated, restrictedTo }