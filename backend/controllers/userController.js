const customErrorHandler = require('../middleware/customErrorHandler')
const Event = require('../models/eventModel')
const test = (req, res) => {
    res.json(`Test Route`)
}

module.exports = {test}