const mongoose = require('mongoose')
const plansSchema = mongoose.Schema({
    title: String,
    trips: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "TripsModel"
    }]
}, {collection: 'plans'})
module.exports = plansSchema
