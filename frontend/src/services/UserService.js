import axios from "axios";

// const API_ROOT = "https://wbdv-generic-server.herokuapp.com/api/tripplanner"
const API_ROOT = "http://localhost:8000"

export const register = (newUser) =>
    fetch(`${API_ROOT}/signup`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        }
    })

export const signIn = (email, password) => {
    axios.post(`${API_ROOT}/signin`, {
        email,
        password
    }).then(response => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log('sign in response -> ', response.data)
        return response.data;
    });
}

export const signOut = () => {
    localStorage.removeItem("user");
}

export const updateProfile = (updateUser) => {
    const token = JSON.parse(localStorage.getItem('accessToken'));
    console.log("client side update file user ->", token)
    fetch(`${API_ROOT}/profile`, {
            method: 'PUT',
            body: JSON.stringify(updateUser),
            headers: {'x-access-token': token,
                'content-type': 'application/json'}
        }
    ).then(response => console.log(response))
}

export const findPublicProfileById = (uid) =>
    fetch(`${API_ROOT}/public-profile/${uid}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data;
        });

