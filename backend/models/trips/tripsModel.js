const mongoose = require("mongoose")
const questionSchema = require("./tripSchema")
const tripModel = mongoose.model("tripModel", questionSchema)

const findAllTrips = () => tripModel.find()

const findTripsForPlan = (planId) =>
    tripModel.find({ _plan : planId}).sort( { date : 1 } );

const findTripById = (tid) => tripModel.findById(tid)

const createTripForPlan = ( newTrip ) => tripModel.create( newTrip )

const removeTrip = (tid) =>
    tripModel.remove({_id: tid})

const updateTrip = (pid, newTrip) =>
    tripModel.update({_id: tid}, {$set: newTrip})


module.exports = {
    findAllTrips, findTripById, findTripsForPlan, createTripForPlan, removeTrip, updateTrip
}
