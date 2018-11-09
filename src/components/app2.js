import React, { Component } from 'react';
import Greeting from './greeting';

class App2 extends Component {
  render(){
    return (
      <div>
        <Greeting name="rururu" />
        <Greeting name="ru" />
      </div>
      );
  }
}

export default App2;