export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromSpot({ id, lat, lng, title }) {
    const options = {
      position: { lat, lng },
      map: this.map,
      title,
    };

    this.markers[id] = new google.maps.Marker(options);
  }

  updateMarkers(newSpots) {
    this.addNewSpoots(newSpots);
    this.removeOldSpots(newSpots);
  }

  addNewSpots(newSpots) {
    newSpots.forEach(spot => {
      if (!this.markers[spot.id]) {
        // new spot is not yet on the map
        this.createMarkerFromBench(spot);
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
