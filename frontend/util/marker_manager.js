export default class MarkerManager {
  constructor(map, showSpot) {
    this.map = map;
    this.markers = {};
    this.showSpot = showSpot;
  }

  handleHover(id) {
    return (e) => {

    };
  }

  createMarkerFromSpot(spot) {

    const mapOptions = {
      position: { lat: parseFloat(spot.lat), lng: parseFloat(spot.lng) },
      map: this.map,
      label: `$${spot.price}`,
      icon: `${window.images.balloon}`,
      // animation: google.maps.Animation.DROP,
    };

    const marker = new google.maps.Marker(mapOptions);
    marker.addListener('click', () => this.showSpot(spot.id));
    this.markers[spot.id] = marker;
  }

  updateMarkers(newSpots) {
    this.addNewSpots(newSpots);
    this.removeOldSpots(newSpots);
  }

  addNewSpots(newSpots) {
    newSpots.forEach(spot => {
      if (!this.markers[spot.id]) {
        // new spot is not yet on the map
        this.createMarkerFromSpot(spot);
      }
    });
  }

  removeOldSpots(spots) {
    const newMarkers = this.toObj(spots);
    for (let id in this.markers) {
      if (!newMarkers[id]) {
        // old marker is no longer within the new bounds
        this.remove(this.markers[id], id);
      }
    }
  }

  remove(marker, id) {
    marker.setMap(null);
    delete this.markers[id];
  }

  toObj(arr) {
    const obj = {};
    arr.forEach((marker) => obj[marker.id] = marker);
    return obj;
  }
}
