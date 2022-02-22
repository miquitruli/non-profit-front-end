import React from 'react';
import { connect } from 'react-redux';
import Event from './Event';


const Events = (props) => {
    return(
        <React.Fragment>
            <h1>All Events:</h1>
                {props.events.map(event => <Event event={event} key={event.id}/>)}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        events: state.events.events
    }
}

export default connect(mapStateToProps, null)(Events);
