import React, {useState} from 'react';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';
import UpdateEventForm from './UpdateEventForm';

const EventShow = (props) => {
    const {id} = useParams() 
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const event = props.events.find(event => event.id === parseInt(id))
    
    if (!event){
        return null
    }

    return(
        <React.Fragment>
            {showUpdateForm && <UpdateEventForm event={event} setShowUpdateForm={setShowUpdateForm}/>}
            {!showUpdateForm && 
            <React.Fragment>
                <h1>Events Details:</h1>
                <p>Name: {event.name}</p>
                <p>Address: {event.address}</p>
                <p>Description: {event.description}</p>
                <p>{event.formatted_due_by}</p>
                <p>{event.contact}</p>
                <p><a href={event.website}>{event.website}</a></p>
            </React.Fragment>}
            <p><button onClick={() => setShowUpdateForm(!showUpdateForm)}>Update Event</button></p>   
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        events: state.events.events
    }
}

export default connect(mapStateToProps, null)(EventShow);

