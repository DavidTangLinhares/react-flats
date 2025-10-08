import React,  { Component } from 'react';

class Flat extends Component {
  render() {
    const { flat } = this.props;
    console.log(flat);
    return (
      <div className='card' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`}}>
        <div className="card-category">{flat.price} {flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
