const mongoose = require('mongoose')
const shortid = require('shortid')
const Schema = mongoose.Schema
const paymentSchema= new Schema({
  user_id: {
    type: String,
    default: shortid,
    ref: 'user'
  }, 
  order_id:{
    type:mongoose.Schema.ObjectId,
    required:true,
    ref:'order'

   },
   paymentDate:{
    type:Date
   },
   cardDetials: {
    type: String,
    required: true,
    unique: true
   },
   recipt: {
    type: String,
    required: [true, 'every payment must have a reciept generated'],
    unique: true

   }
})

const paymentModel = mongoose.model("PAYMENT", userSchema)

module.exports = { paymentModel }