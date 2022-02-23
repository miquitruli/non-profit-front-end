
export const fetchEvents = () => {
    return dispatch => {
        return fetch("http://127.0.0.1:3000/events")
        .then(response => response.json())
        .then(events => dispatch({type: "FETCH_EVENTS", events: events}))
    }
}

export const createEvent = (event) => {
    return dispatch => {
        return fetch("http://127.0.0.1:3000/events", {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                event: event
            })
        })
        .then(response => response.json())
        .then(event => {
            dispatch({type: "ADD_EVENT", event: event})})
    }
}

export const updateEvent = (event) => {
    return dispatch => {
        return fetch(`http://127.0.0.1:3000/events/${event.id}`, {
            method: "PATCH",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                event: event
            })
        })
        .then(response => response.json())
        .then(event => {
            dispatch({type: "UPDATE_EVENT", event: event})})
    }
}