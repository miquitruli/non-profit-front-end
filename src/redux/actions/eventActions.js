
export const fetchEvents = () => {
    return dispatch => {
        return fetch("http://127.0.0.1:3000/events")
        .then(response => response.json())
        .then(events => dispatch({type: "FETCH_EVENTS", events: events}))
    }
}