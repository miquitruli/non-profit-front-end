import React from 'react';
import { connect } from 'react-redux';

const HomePage = (props) => {
    return(
        <><h1>Welcome!</h1>
        <h2>You have commited to the following items:</h2>
        <pre>
            {props.current_user?.user.user_items.map(userItem => <p id="p1">
            <strong>Item:</strong> {userItem.item.name} &nbsp;&nbsp;&nbsp;<strong>Quantity commited:</strong> {userItem.quantity}&nbsp;&nbsp;&nbsp;
            <strong>Due by:</strong> {userItem.event_due_by} &nbsp;&nbsp;&nbsp;<strong>Event Name: </strong>{userItem.event_name}</p>)}
            </pre></>
    )
}

const mapStateToProps = state => {
    return {
        current_user: state.user.user
    }
}

export default connect(mapStateToProps, null)(HomePage);
