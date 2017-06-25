import React from 'react';
import SpotIndexItem from './spot_index_item';

export default class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const spots = this.props.spots.map(spot => (
      <SpotIndexItem key={spot.id} spot={spot} />
    ));
    return (
      <div className="grid-list-container ">
        <div className="grid-list" >
          {spots}
        </div>
      </div>
    );
  }
}
