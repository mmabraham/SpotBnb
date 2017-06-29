import React from 'react';
import SpotIndex from './spots/spot_index';
import SpotMap from './spots/spot_map'

const IndexPage = (props) => {
  return (
    <main className="index-page-main">
      <SpotIndex spots={props.spots} fetchAllSpots={props.fetchAllSpots} />
      <SpotMap
        spots={props.spots}
        updateBounds={props.updateBounds}
        showSpot={props.showSpot}
        registerMapControl={props.registerMapControl}
        place={props.place}
        clearMapCenter={props.clearMapCenter}
      />
    </main>
  )
}


export default IndexPage;
