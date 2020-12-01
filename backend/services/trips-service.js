const tripsModel = require("../models/trips/tripsModel")

const findAllTrips = () => tripsModel.findAllTrips()

const findTripsForPlan = (pid) =>
    tripsModel.findTripsForPlan(pid)

const findTripById = (pid) => tripsModel.findTripById(pid)

const createTripForPlan = ( newTrip) => {
    return tripsModel.createTripForPlan(newTrip)
}

const deleteTrip = (pid) => tripsModel.removeTrip(pid)

const updateTrip = (tid, newTrip) => tripsModel.updateTrip(tid, newTrip)


module.exports = {
    findAllTrips,
    findTripsForPlan,
    findTripById,
    deleteTrip, createTripForPlan, updateTrip
}
