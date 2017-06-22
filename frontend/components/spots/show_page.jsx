import React from 'react';

export default class ShowPage extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    debugger
    this.props.fetchSpot(this.props.id);
  }

  render() {
    const { spot } = this.props;
    if (!spot ) return null;

    return (
      <main>
        <div>
          <img src={spot.img}/>
        </div>
        <div className="details">
          <h2>{spot.title}</h2>
          <h6>`${spot.type}  --  ${spot.capacity}`}</h6>
          <p>{spot.description}</p>
        </div>
      </main>
    )
  }
}
