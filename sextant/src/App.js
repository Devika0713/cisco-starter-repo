import React, { Component } from 'react';

import './App.css';
import Banner from './Components/banner';
import Exhibit from './Components/exhibit';

class App extends Component {
  render() {
    return (
      <div>
        <Banner/>
        Hello
        <Exhibit/>
      </div>
      
    );
  }
}

export default App;
