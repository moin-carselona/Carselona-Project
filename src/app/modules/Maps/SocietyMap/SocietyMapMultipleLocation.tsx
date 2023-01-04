import React from "react";
// import ReactDOM from "react-dom";
// import { compose,withProps } from "recompose";
// import { compose, withProps} from 'recompose'
// import {
//     withScriptjs,
//     withGoogleMap,
//   //   GoogleMap,
//   //   Marker,
//   //   InfoWindow
//   } from "react-google-maps";




const withProps = require('recompose').withProps;
const compose = require('recompose').compose;
const GoogleMap = require('react-google-maps').GoogleMap;
const withScriptjs = require('react-google-maps').withScriptjs;
const withGoogleMap = require('react-google-maps').withGoogleMap;
const Marker = require('react-google-maps').Marker;
const InfoWindow = require('react-google-maps').InfoWindow;
let markers = [
  {
    id: 1,
    latitude: 25.0391667,
    longitude: 121.525,
    shelter: 'marker 1'
  },
  {
    id: 2,
    latitude: 24.0391667,
    longitude: 110.525,
    shelter: 'marker 2'
  },
  {
    id: 3,
    latitude: 20.0391667,
    longitude: 100.525,
    shelter: 'marker 3'
  }
]
const SocietyMapMultipleLocation = compose(
  withProps({
   
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyB1TLe_5fP2B85oU9mvzNnJbN6QuHjdjHE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props: any) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {/* {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )} */}
    {markers.map(marker => {
      //const onClick = props.onClick.bind(this, marker)
      return (
        <Marker
          key={marker.id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        >
          <InfoWindow>
            <div>
              {marker.shelter}
            </div>
          </InfoWindow>
        </Marker>
      )
    })}
  </GoogleMap>
));
export default SocietyMapMultipleLocation
