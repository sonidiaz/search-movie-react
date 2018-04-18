import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import 'bulma/css/bulma.css';
import './App.css';
import Details from './pages/Details';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component = {Home} />
          <Route path='/detail/:id' component={Details} />
        </Switch>
       
      </div>
    );
  }
}

export default App;
