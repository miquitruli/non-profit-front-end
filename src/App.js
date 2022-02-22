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

class App extends React.Component {
  componentDidMount() {
    this.props.fetchEvents()
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
            </Switch>
        </div>
      </Router>
    );
  }
  
}

const mapDispatchToProps = dispatch => {
  return{
    fetchEvents: () => dispatch(fetchEvents())
  }
}

export default connect(null, mapDispatchToProps)(App);
