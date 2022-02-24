
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

export const deleteEvent = (event) => {
    return dispatch => {
        return fetch(`http://127.0.0.1:3000/events/${event.id}`, {
            method: "DELETE",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        })
        .then(response => response.json())
        .then(() => {
            dispatch({type: "DELETE_EVENT", event: event})})
    }
}

export const createItem = (item) => {
    return dispatch => {
        return fetch("http://127.0.0.1:3000/items", {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                item: item
            })
        })
        .then(response => response.json())
        .then(item => {
            dispatch({type: "ADD_ITEM", item: item})})
    }
}

export const deleteItem = (item) => {
    return dispatch => {
        return fetch(`http://127.0.0.1:3000/items/${item.id}`, {
            method: "DELETE",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        })
        .then(response => response.json())
        .then(() => {
            dispatch({type: "DELETE_ITEM", item: item})})
    }
}

export const createUserItems = (items, event_id) => {
    return dispatch => {
        return fetch("http://127.0.0.1:3000/user_items", {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                user_item: {
                    event_id: event_id,
                    items: items
                }
            })
        })
        .then(response => response.json())
        .then(event => {
            dispatch({type: "UPDATE_EVENT", event: event})})
    }
}