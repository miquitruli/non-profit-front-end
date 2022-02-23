import React from 'react';
import {connect} from 'react-redux';
import {createEvent} from './redux/actions/eventActions';

class CreateEventForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            address: "",
            due_by: "",
            contact: "",
            website: "",
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
        this.props.createEvent(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <label>Name:</label>
                <input onChange={this.handleChange} type="text" name="name"></input>
                <label>Description</label>
                <textarea onChange={this.handleChange} name="description"></textarea>
                <label>Address:</label>
                <textarea onChange={this.handleChange} name="address"></textarea>
                <label>Due Date:</label>
                <input onChange={this.handleChange} type="date" name="due_by"></input>
                <label>Phone:</label>
                <input onChange={this.handleChange} type="text" name="contact"></input>
                <label>Website:</label>
                <input onChange={this.handleChange} type="text" name="website"></input>
                

                <input type="submit" value="Create"/>
            </form>  
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        createEvent: event => dispatch(createEvent(event))
    }
}

export default connect(null, mapDispatchToProps)(CreateEventForm);
    