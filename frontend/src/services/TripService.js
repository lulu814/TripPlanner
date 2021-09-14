const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const findTripById = (tripId) =>
  fetch(`${API_ENDPOINT}/trips/${tripId}`).then((response) => response.json());

export const findTripsForPlan = (planId) =>
  fetch(`${API_ENDPOINT}/plans/${planId}/trips`).then((response) =>
    response.json()
  );

export const createTripForPlan = (planId, trip) =>
  fetch(`${API_ENDPOINT}/plans/${planId}/trips`, {
    method: "POST",
    body: JSON.stringify(trip),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());

export const updateTrip = (tripId, trip) =>
  fetch(`${API_ENDPOINT}/trips/${tripId}`, {
    method: "PUT",
    body: JSON.stringify(trip),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());

export const deleteTrip = (tripId) =>
  fetch(`${API_ENDPOINT}/trips/${tripId}`, {
    method: "DELETE",
  }).then((response) => response.json());

export default {
  findTripById,
  findTripsForPlan,
  createTripForPlan,
  updateTrip,
  deleteTrip,
};
