import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Details2 from './pages/Details2';
import {Provider} from 'react-redux'
import store from './redux/store'
import 'bulma/css/bulma.css';
import './App.css';

const App = () =>  {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact path='/' component = {Home} />
          <Route path='/detail/:id' component={Details2} />
        </Switch>
      </div>
    </Provider>
  );
}

export default (App);
