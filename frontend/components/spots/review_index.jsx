import React from 'react';

export default class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    const reviews = this.props.reviews.map((review) => (
      <li key={review.id} className="review-item">
        <div>
          Review info here
        </div>
      </li>
    ))
    return (
      <ul>
        {reviews}
      </ul>
    )
  }
}
