import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css'

import Time from './components/Time';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact render = { props => ( <Time{...props}/> )}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
