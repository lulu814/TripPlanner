const mongoose = require("mongoose")
const plansSchema = require("./plansSchema")
const planModel = mongoose.model("PlanModel", plansSchema)


const findAllPlansForUser = (userId) => planModel.find({userId : userId})

const findAllPlans = () =>  planModel.find()

const findPlanById = (pid) => planModel.findById(pid)

const createPlan = (newPlan) =>
    planModel.create( newPlan)

const createPlanForUser = (newPlan) =>
    planModel.create( newPlan)

const createTripForPlans = ( planId, newPlan) =>
    planModel.insert( { _id: planId}, {$push : {trips : newPlan}})

const removePlan = (pid) =>
    planModel.remove({_id: pid})

const updatePlan = (pid, newPlan) =>
    planModel.update({_id: pid}, {$set: newPlan})

module.exports = {
    findAllPlansForUser, findPlanById, createTripForPlans, removePlan, updatePlan, createPlan, findAllPlans
}
