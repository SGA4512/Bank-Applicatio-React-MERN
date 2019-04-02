import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import './App.css';
import CreateAccount from './components/CreateAccount';
import AccountDetails from './components/AccountDetails';
import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit';
import Transations from './components/Transations';


class App extends Component {
  render() {
    return (
      <BrowserRouter>  
        <Switch>
          <Route exact path="/" component={Landing} />  
          <Route path="/create" component={CreateAccount} />   
          <Route path="/accountDetails" component={AccountDetails} />   
          <Route path='/withdraw' component={ Withdraw } />    
          <Route path='/deposit' component={ Deposit } />  
          <Route path='/trasations' component={ Transations } />  
        </Switch> 
      </BrowserRouter>
    );
  }
}

export default App;
