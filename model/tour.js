const mongoose = require('mongoose')
require('mongoose-double')(mongoose);

const SchemaTypes = mongoose.Schema.Types;

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
            activity: [{
                time: String,
                description: String
            }]
        }]
    },
    price: {
        type: SchemaTypes.Double,
        require: true
    },
    like: {
        type: SchemaTypes.Double
    },
    ratting: {
        type: SchemaTypes.Double
    },
    review: {
        type: Number
    },
}, { timestamps: true })

module.exports = mongoose.model('Tour', TourSchema)