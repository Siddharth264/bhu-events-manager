const express = require('express');
require('dotenv').config()

const connectDb = require('./config/dbConnect')

connectDb()

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})