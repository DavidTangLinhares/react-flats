import React, { Component } from 'react';
import SimpleMap from './google-map-react';
import FlatList from './flat-list';

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
          <FlatList />
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
