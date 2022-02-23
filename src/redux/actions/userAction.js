const setToken = token => {
    localStorage.setItem("token", token)
}

export const createUser = (user) => {
    return dispatch => {
        return fetch("http://127.0.0.1:3000/users", {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                user: user
            })
        })
        .then(response => response.json())
        .then(user => {
            setToken(user.token)
            dispatch({type: "SET_USER", user: user})})
    }
}

export const authCheck = () => {
    return dispatch => {
        return fetch("http://127.0.0.1:3000/current_user", {
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        })
        .then(response => {
            if(response.ok){
                return response.json().then(user => {
                    dispatch({type: "SET_USER", user: user})
                })
            }
            else{
                dispatch({type: "LOGOUT_USER"})
            }
        })
    }
}

export const logInUser = (user) => {
    return dispatch => {
        return fetch("http://127.0.0.1:3000/sessions", {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                user: user
            })
        })
        .then(response => response.json())
        .then(user => {
            setToken(user.token)
            dispatch({type: "SET_USER", user: user})})
    }
}

