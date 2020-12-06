const mongoose = require('mongoose')
const {Schema} = mongoose
const TripSchema = require('./../trips/tripsSchema')
const plansSchema = mongoose.Schema({
    name: String,
    trips: [TripSchema],
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {collection: 'plans'})

module.exports = plansSchema

