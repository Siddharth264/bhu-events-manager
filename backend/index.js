const express = require('express');
require('dotenv').config()
const connectDb = require('./config/dbConnect')
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')
const eventRoute = require('./routes/eventRoute')
const errorHandler = require('./middleware/errorHandler')
const path = require("path")
connectDb()

const _dirname = path.resolve();


const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})

app.use(express.json())
app.use('/api/v1/user', userRoute)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/event',eventRoute)
app.use(express.static(path.join(_dirname,'/client/dist')))
app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname,'client','dist', 'index.html'));
  })
app.use(errorHandler)