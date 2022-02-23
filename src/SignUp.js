import React from 'react';
import {createUser} from './redux/actions/userAction';
import {connect} from 'react-redux';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
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
        this.props.createUser(this.state)
        .then(()=> {
            window.location = "/"
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <label>Name:</label>
                <input onChange={this.handleChange} type="text" name="name"></input>
                <label>Email:</label>
                <input onChange={this.handleChange} type="email" name="email"></input>
                <label>Password:</label>
                <input onChange={this.handleChange} type="password" name="password"></input>
                <label>Password Confirmation:</label>
                <input onChange={this.handleChange} type="password" name="password_confirmation"></input>

                <input type="submit" value="Sign-Up"/>
            </form>  
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        createUser: user => dispatch(createUser(user))
    }
}

export default connect(null, mapDispatchToProps)(SignUp);
    