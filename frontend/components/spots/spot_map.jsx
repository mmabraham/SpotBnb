import React from 'react';
import MarkerManager from '../../util/marker_manager';

export default class SpotMap extends React.Component {
  constructor(props) {
    super(props);

    this.changeMap = this.changeMap.bind(this);
  }

  changeMap(place) {
    if (place.geometry.viewport) {
      this.map.fitBounds(place.geometry.viewport);
    } else {
      this.map.setCenter(place.geometry.location);
      this.map.setZoom(17);
    }
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.7072281, lng: -74.0084196 },
      zoom: 12
    };


    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.markerManager = new MarkerManager(this.map, this.props.showSpot);

    this.map.addListener('idle', () => {
      const bounds = {
        northEast: {
          lat: this.map.getBounds().getNorthEast().lat(),
          lng: this.map.getBounds().getNorthEast().lng()
        },
        southWest: {
          lat: this.map.getBounds().getSouthWest().lat(),
          lng: this.map.getBounds().getSouthWest().lng()
        }
      };
      this.props.updateBounds(bounds);
    });
  }
  // && nextProps.place != this.props.place
  componentWillReceiveProps(nextProps) {
    if (nextProps.place) {
      this.changeMap(nextProps.place);
      this.props.clearMapCenter();
    }
  }

  componentWillUpdate(nextProps) {
    this.markerManager.updateMarkers(nextProps.spots);
  }


  render() {
    return (
      <div id="outer-map-container">
        <div id="map-container" ref={map => this.mapNode = map}></div>
      </div>
    );
  }
}
