
export const findTripById = (tripId) =>
    fetch(`/trips/${tripId}`)
        .then(response => response.json())

export const findTripsForPlan = (planId) =>
    fetch(`/plans/${planId}/trips`)
        .then(response => response.json())

export const createTripForPlan = (planId, trip) =>
    fetch(`/plans/${planId}/trips`, {
        method: "POST",
        body: JSON.stringify(trip),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const updateTrip = (tripId, trip) =>
    fetch(`/trips/${tripId}`, {
        method: "PUT",
        body: JSON.stringify(trip),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deleteTrip = (tripId) =>
    fetch(`/trips/${tripId}`, {
        method: "DELETE"
    }).then(response => response.json())

export default {
    findTripById,
    findTripsForPlan,
    createTripForPlan,
    updateTrip,
    deleteTrip
}
