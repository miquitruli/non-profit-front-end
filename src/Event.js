import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Event = (props) => {
    //console.log(props.event.id)
    return(
        <h2><Link to={`/events/${props.event.id}`}> {props.event.name} </Link></h2>
        )
} 

export default Event;