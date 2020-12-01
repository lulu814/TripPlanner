const tripsModel = require("../models/trips/tripsModel")

const findAllTrips = () => tripsModel.findAllTrips()

const findTripsForPlan = (planId) =>
    tripsModel.findTripsForPlan(planId)

module.exports = {
    findAllTrips, findTripsForPlan
}
