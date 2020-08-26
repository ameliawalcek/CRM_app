import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Analytics from './components/Analytics/Analytics';
import Landing from './components/Landing';
import Actions from './components/Actions/Actions';
import Clients from './components/Clients/Clients';

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Route exact path='/' render={() => <Landing />} />
          <Route exact path='/clients' render={() => <Clients/>}/>
          <Route exact path='/actions' render={() => <Actions/>}/>
          <Route exact path='/analytics' render={() => <Analytics/>} />
        </Router>
      </div>
    )
  }
}

export default App;