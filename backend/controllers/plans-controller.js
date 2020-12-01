const plansService = require("../services/plans-service")

module.exports = (app) => {

    const findPlansForUser = (req, res) => {
        plansService.findPlansForUser()
            .then(plans => res.send(plans))
    }
    const findAllPlans = (req, res) => {
        plansService.findAllPlans()
            .then(plans => res.send(plans))
    }

    const findPlanById = (req, res) => {
        plansService.findPlanById(req.params.pid)
            .then(plan => res.send(plan))
    }

    const createPlan = (req, res) => {
        plansService.createPlan(req.body.plan)
            .then(plan => res.send(plan))
    }

    // const createPlanForUser = (req, res) => {
    //     plansService.createPlanForUser(req.body.plan)
    //         .then(plan => res.send(plan))
    // }

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
    app.get("/api/tripplanner/plans", findAllPlans)
    //app.get("/api/tripplanner/plans", findPlansForUser)
    app.get("/api/tripplanner/plans/:qid", findPlanById)
    app.delete("/api/tripplanner/plan/:pid", deletePlan)
    //app.post("/api/tripplanner/user/:userId/plans", createPlanForUser)
    app.post("/api/tripplanner/plans", createPlan)
    app.put("/api/tripplanner/plans/:pid", updatePlan)
}
