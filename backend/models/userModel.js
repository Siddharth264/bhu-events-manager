const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required : [true, 'You must provide a username'],
        unique : [true, 'Username already exists']
    },
    email : {
        type: String,
        required : [true, 'You must provide a email address'],
        unique : [true, 'Email already exists']
    },
    password : {
        type: String,
        required : [true, 'You must provide a password'],
    }
},{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)