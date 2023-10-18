const { userModel } = require('./../models/user')
const jwt = require('jsonwebtoken')


const jwtToken = (payload) => {
    return jwt.sign({ id: payload }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION })
}
// SIGNING UP USERS
const signUp = async (req, res) => {

    try {
        const body = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            address: req.body.address,
            gender: req.body.gender,
            phone: req.body.phone
        };
        const user = await userModel.create(body);
        const token = await jwtToken(user._id);
        if (user) res.status(201).json({ result: "SUCCESS", message: 'You have succesfully signed_up ', token, userProfile: user })

    } catch (error) {
        res.status(400).json({ result: "FAIL", message: "bad request. try again later", error })
    }
}

const logIn = async (req, res) => {

    const { email, password } = req.body;
    // 1) check if there is any user with the email
    const user = await userModel.findOne({ email }).select('+password')

    // 2) if there is user , compare password
    const correctPassword = await user.comparePassword(password, user.password)

    // 3) send jwt token
    if (!correctPassword) {
        res.status(401).json({ result: "FAIL", message: "invalid password or email" })
    }
    else {
        const token = await jwtToken(user._id)
        res.status(200).json({ result: "SUCCESS", message: "You are successfully logged in", token })

    }
}
module.exports = { signUp, logIn }