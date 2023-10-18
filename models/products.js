const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,

    },
    price: {
        type: Number,
        required: true,
        min: [0, 'price should  be at least be 0']
    },
    size: {
        type: String,
        enum: ['small', 'medium', 'big'],
        required: [true, 'A product size can only have a size of small or medium or big'],
        trim: true
    },
    color: {
      type: String,
      required: [true, 'A product can have RGB or hexadecimal colors']
    },
    quantity: {
        type: Number,
        required: [true, 'A product must have a quantity'],
        default: 0
    },
    description: {
        type: String,
        required: [true, 'A product must have a discription']
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'category'
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now()
    }
})
const productModel = mongoose.model("PRODUCTS", productSchema)
module.exports = { productModel }