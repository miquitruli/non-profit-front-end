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
                <p class="p3">&nbsp;&nbsp;&nbsp;<label>Name:</label>&nbsp;&nbsp;&nbsp;
                <input onChange={this.handleChange} type="text" name="name" value={this.state.name}></input>
                <label>&nbsp;&nbsp;&nbsp;Description:&nbsp;&nbsp;&nbsp;</label>
                <textarea onChange={this.handleChange} name="description" value={this.state.description}></textarea>
                <p class="p3"></p><label>&nbsp;&nbsp;&nbsp;Address:&nbsp;&nbsp;&nbsp;</label>
                <textarea onChange={this.handleChange} name="address" value={this.state.address}></textarea>
                <label>&nbsp;&nbsp;&nbsp;Due Date:&nbsp;&nbsp;&nbsp;</label>
                <input onChange={this.handleChange} type="date" name="due_by" value={this.state.due_by}></input>
                <p class="p3"></p><label>&nbsp;&nbsp;&nbsp;Phone:&nbsp;&nbsp;&nbsp;</label>
                <input onChange={this.handleChange} type="text" name="contact" value={this.state.contact}></input>
                <label>&nbsp;&nbsp;&nbsp;Website:&nbsp;&nbsp;&nbsp;</label>
                <input onChange={this.handleChange} type="text" name="website" value={this.state.website}></input>
                &nbsp;&nbsp;&nbsp;

                <p class="p3"></p><input id="update" type="submit" value="Save"/></p>
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
    