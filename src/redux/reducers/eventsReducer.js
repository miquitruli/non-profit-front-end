
const eventsReducer = (state = { events: []}, action) => {
    switch(action.type) {
        case "FETCH_EVENTS":
            return {
                events: action.events
            }
        default:
            return state
    }
}

export default eventsReducer;

