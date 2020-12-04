//const url = "http://wbdv-generic-server.herokuapp.com/api/tripplanner";
const url = "http://localhost:8000/api/tripplanner"
// planHardcode = {
//     name: '1',
//     _id: '1',
//     userId: '1'
// }


export const findPlanById = (planId) =>
    fetch(`${url}/plans/${planId}`)
        .then(response => response.json())

export const findPlansForUser = (userId) =>
    fetch(`${url}/plans`)
        .then(response => response.json())

export const createPlanForUser = (userId, plan) =>
    fetch(`${url}/plans`, {
        method: "POST",
        body: JSON.stringify(plan),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const updatePlan = (planId, plan) =>
    fetch(`${url}/plans/${planId}`, {
        method: "PUT",
        body: JSON.stringify(plan),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deletePlan = (planId) =>
    fetch(`${url}/plans/${planId}`, {
        method: "DELETE"
    }).then(response => response.json())

export default {
    findPlanById,
    findPlansForUser,
    createPlanForUser,
    updatePlan,
    deletePlan
}
