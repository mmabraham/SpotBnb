import React from 'react';
import SpotIndex from './spots/spot_index';
import SpotMap from './spots/spot_map'

const IndexPage = ({spots, fetchAllSpots, updateBounds, showSpot, registerMapControl, place}) => {
  return (
    <main className="index-page-main">
      <SpotIndex spots={spots} fetchAllSpots={fetchAllSpots} />
      <SpotMap
        spots={spots}
        updateBounds={updateBounds}
        showSpot={showSpot}
        registerMapControl={registerMapControl}
        place={place}
      />
    </main>
  )
}


export default IndexPage;
