import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

export default function SimpleMap( { marker } ) {

  const defaultProps = {
    center: {
      lat: marker.lat || 48.884211,
      lng: marker.lng || 2.34689
    },
    zoom: 12
  };

  console.log(marker);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={marker.lat}
          lng={marker.lng}
        />
      </GoogleMapReact>
    </div>
  );
}
