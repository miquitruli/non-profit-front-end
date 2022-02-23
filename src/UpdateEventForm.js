import React from 'react';
import {updateEvent} from './redux/actions/eventActions';
import {connect} from 'react-redux';

class UpdateEventForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.event.id,
            name: props.event.name,
            description: props.event.description,
            address: props.event.address,
            due_by: props.event.due_by,
            contact: props.event.contact,
            website: props.event.website,
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
        this.props.updateEvent(this.state)
        this.props.setShowUpdateForm(false)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <label>Name:</label>
                <input onChange={this.handleChange} type="text" name="name" value={this.state.name}></input>
                <label>Description</label>
                <textarea onChange={this.handleChange} name="description" value={this.state.description}></textarea>
                <label>Address:</label>
                <textarea onChange={this.handleChange} name="address" value={this.state.address}></textarea>
                <label>Due Date:</label>
                <input onChange={this.handleChange} type="date" name="due_by" value={this.state.due_by}></input>
                <label>Phone:</label>
                <input onChange={this.handleChange} type="text" name="contact" value={this.state.contact}></input>
                <label>Website:</label>
                <input onChange={this.handleChange} type="text" name="website" value={this.state.website}></input>
                

                <input type="submit" value="Save"/>
            </form>  
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        updateEvent: event => dispatch(updateEvent(event))
    }
}

export default connect(null, mapDispatchToProps)(UpdateEventForm);
    