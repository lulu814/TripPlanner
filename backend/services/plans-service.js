const plansModel = require("../models/plans/plansModel")

const findAllPlansDetails = () => plansModel.findAllPlansDetails()

const findPlansForUser = () => plansModel.findAllPlansForUser()
const findAllPlans = () => plansModel.findAllPlans()

const findPlanById = (pid) => plansModel.findPlanById(pid)

const createPlan = (newPlan) => {
    const Plan = {title: "New Plan"}
    return plansModel.createPlan(Plan)
}

// const createPlanForUser = (userId , newPlan) => {
//     const Plan = {title: "New Plan"}
//     return plansModel.createPlanForUser(Plan)
// }

const deletePlan = (pid) => plansModel.removePlan(pid)

const updatePlan = (pid, newPlan) => plansModel.updatePlan(pid, newPlan)


module.exports = {
    findAllPlans,
    findPlansForUser,
    findPlanById,
    deletePlan, createPlan, updatePlan
}
