const mongoose = require('mongoose')
const {Schema} = mongoose;
const tripsSchema = mongoose.Schema({
    day: String,
    date: Date,
    place: String,
    _plan: {type: Schema.Types.ObjectId, ref: 'Plan'},
}, {collection: 'trips'})
module.exports = tripsSchema
