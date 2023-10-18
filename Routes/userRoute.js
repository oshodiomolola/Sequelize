const express = require('express');
const { signUp, logIn} = require('../controller/userController')

const router = express.Router();


router.post('/sign_up', signUp)
router.post('/logIn', logIn)
module.exports = { router }