//react
import React, { Component } from 'react';

import Home from './pages/Home';
// components
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
