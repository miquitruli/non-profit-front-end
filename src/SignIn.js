import React from 'react';
import {logInUser} from './redux/actions/userAction';
import {connect} from 'react-redux';

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
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
        this.props.logInUser(this.state)
        .then(()=> {
            window.location = "/"
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <label>Email:</label>
                <input onChange={this.handleChange} type="email" name="email"></input>
                <label>Password:</label>
                <input onChange={this.handleChange} type="password" name="password"></input>

                <input type="submit" value="Sign-In"/>
            </form>  
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        logInUser: user => dispatch(logInUser(user))
    }
}

export default connect(null, mapDispatchToProps)(SignIn);
    