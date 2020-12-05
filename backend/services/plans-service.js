const plansModel = require("../models/plans/plansModel")



const findPlansForUser = (userId) => plansModel.findAllPlansForUser(userId)
const findAllPlans = () => plansModel.findAllPlans()

const findPlanById = (pid) => plansModel.findPlanById(pid)

const createPlanForUser = ( newPlan) => {
    return plansModel.createPlanForUser(newPlan)
}

const deletePlan = (pid) => plansModel.removePlan(pid)

const updatePlan = (pid, newPlan) => plansModel.updatePlan(pid, newPlan)

module.exports = {
    findAllPlans,
    findPlansForUser,
    findPlanById,
    deletePlan, createPlanForUser, updatePlan
}
