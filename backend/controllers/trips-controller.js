const tripService = require("../services/trips-service")
const Trip = mongoose.model('trips');

module.exports = (app) => {
    const findAllTrips = (req, res) =>
        tripService.findAllTrips()
            .then(trips => res.send(trips))

    const findTripsForPlan = (req, res) => {
        const pid = req.params.pid
        tripService.findTripsForPlan(pid)
            .then(trips => res.send(trips))
    }

    const findTripById = (req, res) => {
        tripService.findTripById(req.params.tid)
            .then(Trip => res.send(Trip))
    }

    const createTripForPlan = (req, res) => {
        const pid = req.params.pid
        const trip = req.body.trip
        trip._plan = pid
        tripService.createTripForPlan(trip)
            .then(Trip => res.send(Trip))
    }

    const deleteTrip = (req, res) => {
        const tid = req.params.tid
        tripService.deleteTrip(tid)
            .then(status => res.send(status))
    }

    const updateTrip = (req, res) => {
        const tid = req.params.tid
        const newTrip = req.body
        tripService.updateTrip(tid, newTrip)
            .then(status => res.send(status))
    }

    app.get("/api/tripTripner/trips", findAllTrips)
    app.get("/api/tripTripner/plans/:pid/trips", findTripsForPlan)
    app.get("/api/tripplanner/trips/:tid", findTripById)
    app.post("/api/tripplanner/plans/:pid/trips", createTripForPlan)
    app.delete("/api/tripplanner/trips/:tid", deleteTrip)
    app.put("/api/tripplanner/trips/:tid", updateTrip)
}
