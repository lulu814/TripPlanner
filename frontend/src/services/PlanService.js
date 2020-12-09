export const findAllPlans = () =>
    fetch(`/api/allplans`)
        .then(response => response.json())

export const findPlanById = (planId) =>
    fetch(`/api/plans/${planId}`)
        .then(response => response.json())

export const findPlansForUser = (userId) =>
    fetch(`/api/user/${userId}/plans`).then(response => response.json())


export const createPlanForUser = (userId, plan) =>
    fetch(`/plans`, {
        method: "POST",
        body: JSON.stringify(plan),
        headers: {
            "content-type": "application/json"
        }
    })

export const updatePlan = (planId, plan) =>
    fetch(`/plans/${planId}`, {
        method: "PUT",
        body: JSON.stringify(plan),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deletePlan = (planId) =>
    fetch(`/plans/${planId}`, {
        method: "DELETE"
    }).then(response => response.json())

export default {
    findAllPlans,
    findPlanById,
    findPlansForUser,
    createPlanForUser,
    updatePlan,
    deletePlan
}
