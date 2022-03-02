import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import Events from './Events';
import EventShow from './EventShow';
import {fetchEvents} from './redux/actions/eventActions';
import React from 'react';
import {connect} from 'react-redux';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {authCheck} from './redux/actions/userAction';
import Faqs from './Faqs';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchEvents()
    this.props.authCheck()
  }

  render() {
    return (
      <Router>
        <div className="App">
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomePage}/> 
                <Route exact path="/about" component={About} />
                <Route exact path="/events" component={Events} />
                <Route path="/events/:id" component={EventShow} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/faqs" component={Faqs} />
            </Switch>
        </div>
      </Router>
    );
  }
  
}

const mapDispatchToProps = dispatch => {
  return{
    fetchEvents: () => dispatch(fetchEvents()),
    authCheck: () => dispatch(authCheck())
  }
}

export default connect(null, mapDispatchToProps)(App);
