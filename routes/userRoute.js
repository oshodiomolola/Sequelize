const express= require('express')
const userController= require('./../controller/userController')

const router = express.Router()

router.post('/signUp' , userController.signUp)
router.post('/logIn', userController.logIn)

module.exports = router