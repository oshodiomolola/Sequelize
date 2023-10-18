const mongoose = require('mongoose')
const Schema = mongoose.Schema
 const orderSchema= new Schema({
    amount:{
        type:Number,
        required:true,
        default:0
    },
    quantity:{
        type:Number,
        default:0
    },
    user_id:{
        type: mongoose.Schema.ObjectId,
        ref:'USER'
    },
    order_date:{
        type:Date
    },
    admin_id:{
        type:mongoose.Schema.ObjectId,
        ref:'USER'
    }
 })

 const order= mongoose.model('order', orderSchema ) 
 module.exports={order}