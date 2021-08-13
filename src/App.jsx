import './App.css';

import * as data from './dog_urls.json';
import React, { Component } from 'react';
import CardList from './components/CardList';
import { Typography } from '@material-ui/core';

class App extends Component {
  state = { data };
  render() {
    return (
      <div>
        <Typography variant="h3" align="center" gutterBottom>
          Take a Look at Doggos
        </Typography>
        <CardList data={this.state.data} />
      </div>
    );
  }
}

export default App;
