import React from 'react';
import {connect} from 'react-redux';
import { createItem } from './redux/actions/eventActions';


class CreateItemForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            event_id: props.event.id,
            size: "",
            quantity: "",
            description: "",
        }
    }

    handleChange = event => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createItem(this.state)
        this.props.setShowCreateItemForm(false)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <label>Name:</label>
                <input onChange={this.handleChange} type="text" name="name"></input>
                <label>Size:</label>
                <input onChange={this.handleChange} type="text" name="size"></input>
                <label>Quantity:</label>
                <input onChange={this.handleChange} type="number" name="quantity"></input>
                <label>Description</label>
                <textarea onChange={this.handleChange} name="description"></textarea>
                
                <input type="submit" value="Create"/>
            </form>  
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        createItem: item => dispatch(createItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CreateItemForm);
    