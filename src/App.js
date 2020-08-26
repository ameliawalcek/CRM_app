import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'

class App extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/clients'/>
        <Route exact path='/actions'/>
        <Route exact path='/analytics'/>
      </div>
    )
  }
}

export default App;