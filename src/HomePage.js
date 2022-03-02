import React from 'react';
import { connect } from 'react-redux';

const HomePage = (props) => {
    return(
        <><h1>The Micaella Foundation</h1>
        <h1>Welcome!</h1>
        {props.loggedIn ? <React.Fragment>
        <h2>You have commited to the following items:</h2>
        <pre>
            {props.current_user?.user.user_items.map(userItem => 
                    userItem.event_due_by ? <p id="p1">
                        <strong>Item:</strong> {userItem.item.name} &nbsp;&nbsp;&nbsp;<strong>Quantity commited:</strong> {userItem.quantity}&nbsp;&nbsp;&nbsp;
                        <strong>Due by:</strong> {userItem.event_due_by} &nbsp;&nbsp;&nbsp;<strong>Send to: </strong>{userItem.event_address}
                    </p> : ""
            )}
            </pre></React.Fragment> : "" }</>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.user.loggedIn,
        current_user: state.user.user
    }
}

export default connect(mapStateToProps, null)(HomePage);
