import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Event = (props) => {
    return(
        <h3><Link to={`/events/${props.event.id}`}> {props.event.name} </Link></h3>
        )
} 

export default Event;