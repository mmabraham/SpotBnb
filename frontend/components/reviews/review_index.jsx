import React from 'react';
import Avatar from 'material-ui/Avatar';
import Rating from 'react-rating';

export default class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    const reviews = this.props.reviews.map((review) => {
      const avatar = review.user_img ? (
        <Avatar size={30} src={review.user_img} />
      ) : (
        <Avatar size={30}>{review.username[0].toUpperCase()}</Avatar>
      );

      return (
        <li key={review.id} className="review-item">
          <div className="review-header">
            {avatar}
            <span>{review.username}</span>
          </div>
          <div className="review-stars">
            <Rating
              className="rating-stars"
              placeholderRate={parseFloat(review.rating)}
              placeholder="fa fa-star fa-2x"
              empty="fa fa-star-o fa-2x"
              full="fa fa-star fa-2x"
              readonly={true}
            />
          </div>
          <div className="review-body">
            <p>
              {review.body}
            </p>
          </div>
        </li>
      );
    });

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
}
