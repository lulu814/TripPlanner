const mongoose = require('mongoose')
const tripsSchema = mongoose.Schema({
    day: String,
    date: Date,
    place: String,
}, {collection: 'trips'})
module.exports = tripsSchema
