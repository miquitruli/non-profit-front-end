
const eventsReducer = (state = { events: []}, action) => {
    switch(action.type) {
        case "FETCH_EVENTS":
            return {
                events: action.events
            }
        case "ADD_EVENT":
            return {
                events: [...state.events, action.event]
            }
        case "UPDATE_EVENT":
            return {
                events: state.events.map(event => event.id === action.event.id ? action.event : event)
            }
        default:
            return state
    }
}


export default eventsReducer;

