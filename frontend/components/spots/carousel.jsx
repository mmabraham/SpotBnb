import React from 'react';
import SpotIndexItem from './spot_index_item';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {startIdx: 0}
  }

  componentDidMount() {
    this.props.fetchAllSpots();
  }

  render() {
    const spots = this.props.spots.map(spot => (
      <SpotIndexItem key={spot.id} spot={spot}/>
    ))
    return (
      <div className="carousel">
        { this.state.startIdx <= 0 ? null : (
          <div
            className="arrow left-arrow"
            onClick={() => this.setState({startIdx: this.state.startIdx - 1})}>
            ⟨
          </div>
        )}
        {spots[this.state.startIdx]}
        {spots[this.state.startIdx + 1]}
        {spots[this.state.startIdx + 2]}
        { this.state.startIdx > this.props.spots.length - 4 ? null : (
          <div
            className="arrow right-arrow"
            onClick={() => this.setState({startIdx: this.state.startIdx + 1})}>
            ⟩
          </div>
        )}
      </div>
    )
  }
}
