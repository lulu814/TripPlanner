import axios from "axios";

export const register = (newUser) =>
    fetch(`/signup`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        }
    })

export const signIn = (username, password) => {
    axios.post(`/signin`, {
        username,
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
    fetch(`/profile`, {
            method: 'PUT',
            body: JSON.stringify(updateUser),
            headers: {'x-access-token': token,
                'content-type': 'application/json'}
        }
    )
}

export const findPublicProfileById = (uid) =>
    fetch(`/api/public-profile/${uid}`)
        .then(response => response.json())
        .then(data => {
            return data;
        });

