import React, { Component } from 'react';

import './App.css';
import Banner from './Components/banner';
import Exhibit from './Components/exhibit';
import { Grid } from '@mui/material';

import AddressDisplay from './Components/AddressDisplay';

class App extends Component {
  render() {
    return (
      <div >
        <Banner/>
        <Grid container spacing={1.5} paddingTop={5} paddingLeft={2}>
        <Grid item xs={4}>
        <Exhibit 
          name="IPV6"
          content={<AddressDisplay ipvVersion="IPv6" />}
          />
          
        </Grid>
        <Grid item xs={4}>
        <Exhibit 
          name="IPV4"
          content={<AddressDisplay ipvVersion="IPv4" />}
          />
        </Grid>
        {/* <Grid item xs={4}>
        <Exhibit
          name="Sample 2"
          content="Vestibulum efficitur elit non ex cursus dapibus. Donec vitae ultrices lacus. Aliquam vestibulum dui nulla, vel auctor odio dictum elementum. Etiam massa dui, molestie in tempor pretium, consectetur eu odio."
        />
        </Grid>
        <Grid item xs={4}>
        <Exhibit
        name="sample3"
        content="Donec sollicitudin est vel luctus euismod. Vivamus quis maximus mauris. In sit amet mi facilisis, eleifend metus sed, suscipit dui. Donec venenatis, leo et hendrerit finibus, arcu diam congue ante, sed interdum risus sapien in odio. "
        />
        </Grid> */}
        </Grid>
      </div>
      
    );
  }
}

export default App;
