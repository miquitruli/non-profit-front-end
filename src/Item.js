import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from './redux/actions/eventActions';

const Item = (props) => {
    const [commitQuantity, setCommitQuantity] = useState(0)
    const handleDelete = () => {
        props.deleteItem(props.item)
    }

    const handleChange = (event) => {
        setCommitQuantity(event.target.value)
        if (props.itemCommitQuantity.filter(element => element[0] === props.item.id).length === 0) {
            props.setItemCommitQuantity([...props.itemCommitQuantity, [props.item.id, event.target.value] ])
        }
        else {
            props.setItemCommitQuantity(props.itemCommitQuantity.map(element => element[0] === props.item.id ? [props.item.id, event.target.value] : element))
        }
    }

    return (
        <React.Fragment>
            <p><strong>Item Needed:</strong> {props.item.name}&nbsp;&nbsp;  
            <strong>&nbsp;&nbsp; Quantity Needed:</strong> {props.item.quantity_remaining} &nbsp;&nbsp; 
            <strong>Commit to:&nbsp;&nbsp; </strong><input id="input1" onChange={handleChange} type="number" value={commitQuantity} min={0} max={props.quantity_remaining}></input>
            &nbsp;&nbsp;&nbsp;&nbsp;
             
            {props.current_user?.user?.id === props.item.user_id &&
            <button onClick={handleDelete}>Delete</button> }</p>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: item => dispatch(deleteItem(item))
    }
}

const mapStateToProps = state => {
    return {
        current_user: state.user.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);


