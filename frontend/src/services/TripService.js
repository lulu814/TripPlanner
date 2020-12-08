const url = "http://localhost:8000"

export const findTripById = (tripId) =>
    fetch(`${url}/trips/${tripId}`)
        .then(response => response.json())

export const findTripsForPlan = (planId) =>
    fetch(`${url}/plans/${planId}/trips`)
        .then(response => response.json())

export const createTripForPlan = (planId, trip) =>
    fetch(`${url}/plans/${planId}/trips`, {
        method: "POST",
        body: JSON.stringify(trip),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const updateTrip = (tripId, trip) =>
    fetch(`${url}/trips/${tripId}`, {
        method: "PUT",
        body: JSON.stringify(trip),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deleteTrip = (tripId) =>
    fetch(`${url}/trips/${tripId}`, {
        method: "DELETE"
    }).then(response => response.json())

export default {
    findTripById,
    findTripsForPlan,
    createTripForPlan,
    updateTrip,
    deleteTrip
}
