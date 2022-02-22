import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const NavBar = () => {
    return(
        <React.Fragment>
            <Link to="/"> Home </Link>
            <Link to="/About"> About </Link>
            <Link to="/Events"> Events </Link>
        </React.Fragment>
    )
}

export default NavBar;