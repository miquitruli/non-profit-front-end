import React, {useState} from 'react';
import { connect } from 'react-redux';
import Event from './Event';
import CreateEventForm from './CreateEventForm';


const Events = (props) => {
    const [createEventForm, setCreateEventForm] = useState(false)
    
    return(
        <React.Fragment>
            
            <p><button onClick={() => setCreateEventForm(!createEventForm)}>Create Event</button></p>
            {createEventForm && <CreateEventForm />}
            <h1>Your Events:</h1>
                {props.events.filter(event => event.user_id === props.current_user?.user?.id).map(event => <Event event={event} key={event.id}/>)}
            <h1>Other Events:</h1>
                {props.events.filter(event => event.user_id != props.current_user?.user?.id).map(event => <Event event={event} key={event.id}/>)}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        events: state.events.events,
        current_user: state.user.user
    }
}

export default connect(mapStateToProps, null)(Events);
