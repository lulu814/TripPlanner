const mongoose = require('mongoose')
const {Schema} = mongoose;
const TripSchema = require('./../trips/tripSchema');
const plansSchema = mongoose.Schema({
    title: String,
    trips: [TripSchema],
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {collection: 'plans'})

module.exports = plansSchema
