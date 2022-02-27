import React, {useState} from 'react';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';
import UpdateEventForm from './UpdateEventForm';
import { deleteEvent, createUserItems } from './redux/actions/eventActions';
import Item from './Item';
import CreateItemForm from './CreateItemForm';


const EventShow = (props) => {
    const {id} = useParams() 
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [showCreateItemForm, setShowCreateItemForm] = useState(false)
    const event = props.events.find(event => event.id === parseInt(id))
    const [itemCommitQuantity, setItemCommitQuantity] = useState([])

    const commit = () => {
        props.createUserItems(itemCommitQuantity, event.id)
        .then(() => {
            window.location = `/events/${event.id}`  
        })
    }
    
    const deleteEvent = () => {
        props.deleteEvent(event)
        .then(() => {
            window.location = "/events"
        })
    }
    
    if (!event){
        return null
    }
    
    return(
        <React.Fragment>
            {props.current_user?.user?.id === event.user_id && 
                <React.Fragment>
                    <p><button onClick={() => setShowUpdateForm(!showUpdateForm)}>Update Event</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={deleteEvent}>Delete Event</button></p>
                </React.Fragment>
            }
            
            {showUpdateForm && <UpdateEventForm event={event} setShowUpdateForm={setShowUpdateForm}/>}
            {!showUpdateForm && 
            <React.Fragment>
                <h1>Events Details:</h1>
                <p>Name: {event.name}</p>
                <p>Address: {event.address}</p>
                <p>Description: {event.description}</p>
                <p>{event.formatted_due_by}</p>
                <p>Contact: <a href={`tel:${event.contact}`}>{event.contact}</a></p>
                <p><a href={event.website}>{event.website}</a></p>
                {props.current_user?.user?.id === event.user_id &&
                    <>
                    <button onClick={() => setShowCreateItemForm(!showCreateItemForm)}>Add Item</button>
                    {showCreateItemForm && <CreateItemForm event={event} setShowCreateItemForm={setShowCreateItemForm}/>}
                    </>
                }
                <h2>Items:</h2>
                {event.items.map(item => <Item itemCommitQuantity={itemCommitQuantity} setItemCommitQuantity={setItemCommitQuantity} key={item.id} item={item}/>)}
                <button onClick={commit}>Commit</button>
            </React.Fragment>}
            
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        events: state.events.events,
        current_user: state.user.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteEvent: event => dispatch(deleteEvent(event)),
        createUserItems: (items, event_id) => dispatch(createUserItems(items, event_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);

