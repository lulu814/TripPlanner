const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const findAllPlans = () =>
  fetch(`${API_ENDPOINT}/api/allplans`).then((response) => response.json());

export const findPlanById = (planId) =>
  fetch(`${API_ENDPOINT}/api/plans/${planId}`).then((response) =>
    response.json()
  );

export const findPlansForUser = (userId) =>
  fetch(`${API_ENDPOINT}/api/user/${userId}/plans`).then((response) =>
    response.json()
  );

export const createPlanForUser = (userId, plan) =>
  fetch(`${API_ENDPOINT}/plans`, {
    method: "POST",
    body: JSON.stringify(plan),
    headers: {
      "content-type": "application/json",
    },
  });

export const updatePlan = (planId, plan) =>
  fetch(`${API_ENDPOINT}/plans/${planId}`, {
    method: "PUT",
    body: JSON.stringify(plan),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());

export const deletePlan = (planId) =>
  fetch(`${API_ENDPOINT}/plans/${planId}`, {
    method: "DELETE",
  }).then((response) => response.json());

export default {
  findAllPlans,
  findPlanById,
  findPlansForUser,
  createPlanForUser,
  updatePlan,
  deletePlan,
};
