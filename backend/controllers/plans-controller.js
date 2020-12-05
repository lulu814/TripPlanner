const plansService = require("../services/plans-service")
const plansSchema = require("./plansSchema")
const planModel = mongoose.model("PlanModel", plansSchema)


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
        // const userId = req.params.userId
        let userId  = JSON.parse(localStorage.getItem('user'))._id
        plansService.findPlansForUser(userId)
            .then(plans => res.send(plans))
    }

    const createPlanForUser = (req, res) => {
        // const userId = req.params.pid
        // let userId  = JSON.parse(localStorage.getItem('user')).user._id
        // const plan = new planModel({
        //     name : 'New Plan',
        //     _user : userId
        // })

        plansService.createPlanForUser(req.body.plan)
            .then(plan => res.send(plan))
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
    app.get("/api/tripplanner/plans", findAllPlans)
    app.get("/api/tripplanner/plans", findPlansForUser)
    app.get("/api/tripplanner/plans/:pid", findPlanById)
    app.delete("/api/tripplanner/plans/:pid", deletePlan)
    app.post("/api/tripplanner/plans", createPlanForUser)
    app.put("/api/tripplanner/plans/:pid", updatePlan)
}
