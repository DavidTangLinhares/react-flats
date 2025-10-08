import React,  { Component } from 'react';
import flats from '../../data/flats';
import Flat from './flat';

class FlatList extends Component {
  render() {
    // console.log(flats);
    return (
      <div className='flat-list'>
        {flats.map((flat, index) => {
          return <Flat key={index} flat={flat} handleClick={this.props.handleClick}/>
        })}
      </div>
    )
  }
}

export default FlatList;
