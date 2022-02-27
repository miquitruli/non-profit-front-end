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
            <form id="signup" onSubmit={this.handleSubmit}> 
                <p class="p3"><label>Name:&nbsp;&nbsp;</label>
                <input onChange={this.handleChange} type="text" name="name"></input></p>
                <p class="p3">&nbsp;&nbsp;<label>Email:&nbsp;&nbsp;</label>
                <input onChange={this.handleChange} type="email" name="email"></input></p>
                <p class="p3">&nbsp;&nbsp;<label>Password:&nbsp;&nbsp;</label>
                <input onChange={this.handleChange} type="password" name="password"></input></p>
                <p class="p3">&nbsp;&nbsp;<label>Password Confirmation:&nbsp;&nbsp;</label>
                <input onChange={this.handleChange} type="password" name="password_confirmation"></input></p>
                &nbsp;&nbsp;
                <p class="p3"><input id="submitsignup" type="submit" value="Sign-Up"/></p>
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
    