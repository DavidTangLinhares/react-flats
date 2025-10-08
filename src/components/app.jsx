import React, { Component } from 'react';
import SimpleMap from './google-map-react';
import FlatList from './flat-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'App',
      marker: {}
    };
  }

  handleClick = (flat) => {
    // console.log('App: handleClick');
    // console.log(flat);

    this.setState({
      marker: flat
    });
  }

  render() {
    return (
      <div>
          <FlatList
            handleClick={this.handleClick}
            selected={this.state.marker}
          />
        <div className="map-container">
          <SimpleMap
            marker={this.state.marker}
          />
        </div>
      </div>
    );
  }
}

export default App;
