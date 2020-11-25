const API_ROOT = "https://wbdv-generic-server.herokuapp.com/api/tripplanner"

export const createUser = (newUser) =>
    fetch(`${API_ROOT}/signup`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        }
    })

export const signIn = (email, password) => {
    fetch(`${API_ROOT}/signin`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}


export const updateProfile = (updateUser) => {
    fetch(`${API_ROOT}/profile/${updateUser.id}`, {
        method: 'PUT',
        body: JSON.stringify(updateUser),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}
