//const mongoose = require("mongoose")
const tripService = require("../services/trips-service")

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
        // console.log(req.params.pid)
        // const {day, date , places} = req.body;
        // const trip = new Trip({
        //     day, date,
        //     places: ['la', 'boston'],
        //     _plan: req.params.pid,
        // });

        res.json( tripService.createTripForPlan(req.body))
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

    app.get("/trips", findAllTrips)
    app.get("/plans/:pid/trips", findTripsForPlan)
    app.get("/trips/:tid", findTripById)
    app.post("/plans/:pid/trips", createTripForPlan)
    app.delete("/trips/:tid", deleteTrip)
    app.put("/trips/:tid", updateTrip)
}
