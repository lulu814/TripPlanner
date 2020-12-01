const mongoose = require("mongoose")
const questionSchema = require("./tripSchema")
const tripModel = mongoose.model("tripModel", questionSchema)
const planModel = require("./../plans/plansModel")

const findAllTrips = () => tripModel.find()
const findTripsForPlan = (planId) =>
    tripModel.find({planId: planId}).sort( { date : 1 } );

const createTripForPlans = ( planId, newTrip ) => planModel.createTripForPlans( planId, newTrip )

module.exports = {
    findAllTrips, findTripsForPlan, createTripForPlans
}
