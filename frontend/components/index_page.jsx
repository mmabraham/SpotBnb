import React from 'react';
import SpotIndex from './spots/spot_index';
import SpotMap from './spots/spot_map'

const IndexPage = ({spots, fetchAllSpots}) => {
  return (
    <main>
      <SpotIndex spots={spots} fetchAllSpots={fetchAllSpots} />
      <SpotMap spots={spots}/>
    </main>
  )
}


export default IndexPage;
