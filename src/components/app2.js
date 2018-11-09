import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

class App2 extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  handlePlaceSubmit(place){
    axios.get(GEOCODE_ENDPOINT, { params: { address: place } })
    .then((results) => {
      console.log(results);
    });
  }

  render(){
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)}/>
        <GeocodeResult 
          address={this.state.adress}
          lat={this.state.lat}
          lng={this.state.lng}
        />
      </div>
      );
  }
}

export default App2;