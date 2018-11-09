import React, { Component } from 'react';
import Greeting from './greeting';

class App2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Bob',
    };
  }

  handleNameChange(name) {
    this.setState({name})
}
  handleBobClicked(name) {
    this.setState({name: name})
}

  render(){
    return (
      <div>

      <input type="text" value={this.state.name}
        onChange={ e => this.handleNameChange(e.target.value)} />
         {/* onChange={ e => this.handleNameChange(e)} /> */}
        <button onClick={() => this.handleBobClicked('Bob')}>
          I am Bob
        </button>
        <Greeting name= {this.state.name} />
      </div>
      );
  }
}

export default App2;