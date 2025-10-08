import React,  { Component } from 'react';

class Flat extends Component {

  flatClick = (event) => {
    this.props.handleClick(this.props.flat);
  };

  render() {
    const { flat, isActive } = this.props;
    const cardClass = isActive ? 'card active' : 'card';

    console.log(cardClass);
    console.log(this.props);
    // console.log(flat);

    return (
      <div
        className={cardClass}
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`}}
        onClick={this.flatClick}
      >
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
