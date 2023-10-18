const mongoose = require('mongoose')
const Schema = mongoose.Schema
const feedbacksSchema = new Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'USER'
    },
    ordered_product: {
        type: mongoose.Schema.ObjectId,
        ref: 'orderedProduct'
    },
    rating: {
        type: Number,
        default: 2.5,
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

const feedbacks = mongoose.model('feedback', feedbacksSchema)
module.exports = { feedbacks }