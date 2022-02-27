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
            <form id="signin" onSubmit={this.handleSubmit}> 
                <label>Email:&nbsp;&nbsp;</label>
                <input onChange={this.handleChange} type="email" name="email"></input>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label>Password:&nbsp;&nbsp;</label>
                <input onChange={this.handleChange} type="password" name="password"></input>

                &nbsp;&nbsp;<input id="submitbutton" type="submit" value="Sign-In"/>
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
    