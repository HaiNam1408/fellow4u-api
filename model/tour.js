const mongoose = require('mongoose')

const TourSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    provider: {
        type: String
    },
    duration: {
        type: String
    },
    place: {
        type: String
    },
    schedule: {
        type: [{
            place: String,
            schedule: [{
                time: String,
                activity: String
            }]
        }]
    },
    price: {
        type: Number,
        require: true
    },
    like: {
        type: Number
    },
    ratting: {
        type: Number
    },
    review: {
        type: Number
    },
}, { timestamps: true })

module.exports = mongoose.model('Tour', TourSchema)