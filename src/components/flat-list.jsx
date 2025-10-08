import React,  { Component } from 'react';
import flats from '../../data/flats';
import Flat from './flat';

class FlatList extends Component {
  render() {
    // console.log(flats);
    return (
      <div className='flat-list'>
        {flats.map((flat) => {
          return <Flat
            key={flat.name}
            flat={flat}
            handleClick={this.props.handleClick}
            isActive={flat === this.props.selected}
          />
        })}
      </div>
    )
  }
}

export default FlatList;
