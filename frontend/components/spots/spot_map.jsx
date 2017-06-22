import React from 'react';
import MarkerManager from '../../util/marker_manager';

export default class SpotMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.7072281, lng: -74.0084196 },
      zoom: 5
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.markerManager = new MarkerManager(this.map);

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
