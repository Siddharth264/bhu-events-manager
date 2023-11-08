const mongoose = require('mongoose')

const defaultAvatar = "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="

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
    },
    avatar :{
        type: String,
        default : defaultAvatar
    }
},{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)