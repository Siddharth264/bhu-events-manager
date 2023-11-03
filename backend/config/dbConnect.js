const mongoose = require('mongoose')

const connectDb = async () => {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log(`DB Connection Successful`)
    }).catch((err)=>{
        console.log(`Couldn't connect to the DB, error = ${err}`)
    })
}

module.exports = connectDb