const mongoose = require("mongoose")
const plansSchema = require("./plansSchema")
const planModel = mongoose.model("PlanModel", plansSchema)

const findAllPlansForUser = (userId) => planModel.find({user : userId})

const findAllPlans = () =>  planModel.find()

const findPlanById = (pid) => planModel.findOne({_id : pid})

const createPlanForUser = (newPlan) =>
    planModel.create( newPlan)

const removePlan = (pid) =>
    planModel.remove({_id: pid})

const updatePlan = (pid, newPlan) =>
    planModel.update({_id: pid}, {$set: newPlan})

module.exports = {
    findAllPlansForUser, findPlanById, removePlan, updatePlan , findAllPlans, createPlanForUser
}
