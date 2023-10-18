const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminProduct= new Schema({
    product:{
        type: mongoose.Schema.ObjectId,
        ref:'PRODUCTS'
    },
    admin:{
        type:mongoose.Schema.ObjectId,
        ref:'USER'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const productByAdmin = mongoose.model('adminProduct', adminProduct)
module.exports={productByAdmin}