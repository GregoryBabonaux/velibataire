import React from 'react';

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const { compose, withStateHandlers } = require("recompose");

// Ici, on compose notre component pour lui injecter des HOC (hight order component)
const MapWithAMarker = compose(
  
  withStateHandlers(() => ({
    isOpen: false,
    indexOpened: false
  }), 
  {
    onToggleOpen: ({ isOpen }) => (index) => ({
      isOpen: !isOpen,
      indexOpened: index
    }),
  }),
  withScriptjs,
  withGoogleMap
)(props => {

  let markers = [],
      renderComponent;

  if( props.positions ){
      markers = props.positions.map( (position, index) => 
        <Marker
          key={index}
          position={{ lat: position.lat, lng: position.lng }}
          onClick={() => props.onToggleOpen(index)}
        >
          {
            (props.isOpen && props.indexOpened === index) && <InfoWindow onCloseClick={props.onToggleOpen}><div>{position.name}</div></InfoWindow>
          }
        </Marker>
      )
  }

  if( props.currentPosition ){
    renderComponent = <GoogleMap
                        defaultZoom={12}
                        defaultCenter={{ lat: props.currentPosition.lat, lng: props.currentPosition.lng }}
                      >
                        {markers}
                      </GoogleMap>
  } else {
    renderComponent = <div>...</div>
  }
  return (
    <div>
      {renderComponent}
    </div>
  )
  
});

export default MapWithAMarker