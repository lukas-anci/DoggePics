import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import Card from './Card';
import SingleCard from './SingleCard';
class CardList extends Component {
  state = { urls: this.props.data.default, isOpen: false, photo: '' };

  render() {
    const onOpen = (id) => {
      console.log('id', id);
      this.setState({ isOpen: !this.state.isOpen, photo: id });
    };
    const onClose = () => {
      console.log('close this');
      this.setState({ isOpen: !this.state.isOpen });
    };

    return (
      <div>
        {this.state.isOpen ? (
          <SingleCard photo={this.state.photo} onClose={onClose} />
        ) : (
          <Grid container spacing={2} justifyContent="center">
            {this.props.data.default.urls.slice(0, 10).map((item) => (
              <Card onToggle={onOpen} key={item} item={item} />
            ))}
          </Grid>
        )}
      </div>
    );
  }
}

export default CardList;
