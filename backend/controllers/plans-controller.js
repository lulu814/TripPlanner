const mongoose = require("mongoose")
const plansService = require("../services/plans-service")
//const Plan = require("./../models/plans/plansSchema")

module.exports = (app) => {

    const findAllPlans = (req, res) => {
        plansService.findAllPlans()
            .then(plans => res.send(plans))
    }

    const findPlanById = (req, res) => {
        plansService.findPlanById(req.params.pid)
            .then(plan => res.send(plan))
    }

    const findPlansForUser = (req, res) => {
        plansService.findPlansForUser(req.params.uid)
            .then(plans => res.send(plans))
    }

    const createPlanForUser = (req, res) => {

        res.json(plansService.createPlanForUser(req.body))
      }

    const deletePlan = (req, res) => {
        const pid = req.params.pid
        plansService.deletePlan(pid)
            .then(status => res.send(status))
    }

    const updatePlan = (req, res) => {
        const pid = req.params.pid
        const newPlan = req.body
        plansService.updatePlan(pid, newPlan)
            .then(status => res.send(status))
    }
    app.get("/api/allplans", findAllPlans)
    app.get("/api/user/:uid/plans", findPlansForUser)
    app.get("/api/plans/:pid", findPlanById)
    app.delete("/plans/:pid", deletePlan)
    app.post("/plans", createPlanForUser)
    app.put("/plans/:pid", updatePlan)
}
