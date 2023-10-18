const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shipmentSchema= new Schema({
    payment_id:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'order'
    },
    deliveryDate:{
        type:Date
    },
    
})

const shipment= mongoose.model('shipment', shipmentSchema)
module.exports={shipment}