import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {  //this is a lifecycle method that gets rendered automatically once our component gets rendered to the screen.
    new google.maps.Map(this.refs.map, { // this is how we create an embeded google map inside of our document. The first argument(this.refs.map) takes a reference to an html node/element where we want this map to be rendered. Google maps api is a third party library. It is included as a script in the index.html page.  Most of this third party libraries don't know how to behave in a React ecosystem. They don't know what a render menthod or JSX is.
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;