
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
        case "DELETE_EVENT":
            return {
                events: state.events.filter(event => event.id !== action.event.id)
            }
        case "ADD_ITEM":
            return {
                events: state.events.map(event => event.id === action.item.event_id ? {...event, items: [...event.items, action.item]} : event)
            }
        case "DELETE_ITEM":
            return {
                events: state.events.map(event => event.id === action.item.event_id ? {...event, items: event.items.filter(item => item.id !== action.item.id)} : event)
            }
        default:
            return state
    }
}


export default eventsReducer;

