import React from 'react';
import Avatar from 'material-ui/Avatar';


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
          <div>
            {avatar}
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
