import React, { Component } from 'react';
import './App.scss';
import HomePage from './container/HomePage';
import LoginPage from './container/LoginPage';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
 class App extends Component{

 render() {
    return(
    <Router>
    <Switch>
    <Route exact path ='/' component={LoginPage}/>
    <Route exact path ='/dashboard' component={HomePage}/>
    </Switch>
    </Router>
 
    
)}
};
export default App;



