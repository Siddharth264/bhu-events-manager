const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    registerUrl:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    meridian:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    organiser:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    userRef:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Event', eventSchema)