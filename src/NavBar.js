import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


const NavBar = (props) => {
    const logOut = () => {
        props.logOut()
    }

    return(
        <React.Fragment>
            <br></br>
            <br></br>
            <div id="home">
            <Link id="home"to="/"> Home  |</Link>
            <Link to="/about"> About  |</Link>
            <Link to="/events"> Events  |</Link>
            {!props.currentUser.loggedIn && <Link to="/SignUp"> Sign Up  |</Link>}
            {!props.currentUser.loggedIn && <Link to="/SignIn"> Sign In </Link>}
            {props.currentUser.loggedIn && <Link onClick={logOut} to="#"> Log Out </Link>}
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch({type: "LOGOUT_USER"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
