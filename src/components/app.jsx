import React, { Component } from 'react';
import SimpleMap from './google-map-react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'App'
    };
  }
  render() {
    return (
      <div>
        <div className="flat-list">
          <div className='card' style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg')"}}>
            <div className="card-category">150 EUR</div>
            <div className="card-description">
              <h2>Super 60m2 in trendy neighborhood!</h2>
            </div>
            <a class="card-link" href="#"></a>
          </div>
          <div className='card' style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg')"}}>
            <div className="card-category">150 EUR</div>
            <div className="card-description">
              <h2>Super 60m2 in trendy neighborhood!</h2>
            </div>
            <a class="card-link" href="#"></a>
          </div>
        </div>
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
