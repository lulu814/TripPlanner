const tripService = require("../services/trips-service")

module.exports = (app) => {
    const findAllTrips = (req, res) =>
        tripService.findAllTrips()
            .then(trips => res.send(trips))

    const findTripsForPlan = (req, res) => {
        const planId = req.params["pid"]
        tripService.findTripsForPlan(planId)
            .then(trips => res.send(trips))
    }

    app.get("/api/tripplanner/trips", findAllTrips)
    app.get("/api/tripplanner/plans/:pid/trips", findTripsForPlan)
}
