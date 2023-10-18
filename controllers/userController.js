const { userModel } = require('../model/userModel')
const jwt = require('jsonwebtoken')

const jwtToken = (payload) => {
    return jwt.sign({ id: payload }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION })
}

async function signUp(req, res) {
    try {
        const body = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            address: req.body.address,
            gender: req.body.gender,
            phone: req.body.phone

        };
        const newUser = await userModel.create(body);
        const token = await jwtToken(newUser.id);
        if (newUser && token) res.status(201).json({ result: "success", message: 'you have succefully signed up', token, userProfile: newUser })
    } catch (err) {
        res.status(400).json({ result: 'fail', message: 'something went wrong', err })
    }
}

const logIn = async (req, res) => {

    const { email, password } = req.body;
    // 1) check if there is any user with the email
    const user = await userModel.findOne({where:{email: email} })

    // 2) if there is user , compare password
    const correctPassword = await user.comparePassword(password, user.password)

    // 3) send jwt token
    if (!correctPassword) {
        res.status(401).json({ result: "FAIL", message: "invalid password or email" })
    }
    else {
        const token = await jwtToken(user.id)
        res.status(200).json({ result: "SUCCESS", message: "You are successfully logged in", token })

    }
}


module.exports = {
    signUp,
    logIn
}