const mongoose = require("mongoose")
const tripsSchema = require("./tripsSchema")
const tripModel = mongoose.model("tripModel", tripsSchema)

const findAllTrips = () => tripModel.find()

const findTripsForPlan = (planId) =>
    tripModel.find({ _plan : planId})

const findTripById = (tid) => tripModel.findById(tid)

const createTripForPlan = ( newTrip ) => tripModel.create( newTrip )

const removeTrip = (tid) =>
    tripModel.remove({_id: tid})

const updateTrip = (tid, newTrip) =>
    tripModel.update({_id: tid}, {$set: newTrip})


module.exports = {
    findAllTrips, findTripById, findTripsForPlan, createTripForPlan, removeTrip, updateTrip
}
