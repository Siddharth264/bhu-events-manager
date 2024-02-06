const Event = require('../models/eventModel')

const createEvent = async(req, res, next) =>{
    try {
        const eventListing = await Event.create(req.body);
        return res.status(200).json(eventListing)
    } catch (error) {
        next(error);
    }
}

const getAllEvents = async(req, res, next) =>{
    try {
        const alllistings = await Event.find({})
        res.status(200).send(alllistings)
    } catch (error) {
        next(error)
    }
}

module.exports = {createEvent,getAllEvents}