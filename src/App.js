//react
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
// components
import Nav from './components/Nav';

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: null
    }
  }

  render() {
    return (
      <div>
        <Nav user={this.state.user}/>
        <Router>
          <Switch>
            <Route exact path="/" render={props => <Home
              sent={this.state.sent}
              received={this.state.received}
              {...props}
              user={this.state.user}
            />} />
          </Switch>
        </Router>
        </div>
    );
  }
}

export default App;
