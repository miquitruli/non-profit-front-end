import React from 'react';

const Item = (props) => {
    const handleDelete = () => {

    }

    return (
        <React.Fragment>
            <p>{props.item.name}
            {props.item.quantity}</p>
            <button onClick={handleDelete}>Delete</button>
        </React.Fragment>
    )
}

export default Item;

