const url = "http://wbdv-generic-server.herokuapp.com/api/tripplanner";

// trip: {date: '2022-12-1', places: ['Boston', 'New York'], order(day): 1, planId: '1', _id: '1'}

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
