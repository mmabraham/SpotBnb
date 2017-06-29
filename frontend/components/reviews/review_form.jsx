import React from 'react';
import Rating from 'react-rating';

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: '', rating: 0};
  }


  render() {
    return (
      <form className="review-form">
        <Rating
          className="rating-stars"
          placeholderRate={5}
          placeholder="fa fa-star fa-2x"
          empty="fa fa-star-o fa-2x"
          full="fa fa-star fa-2x"
          onChange={rating => this.setState({ rating })}
          />
        <textArea onChange={body => this.setState({ body })} >
          {this.state.body}
        </textArea>
        <button className="btn" >
          Review this spot
        </button>
      </form>
    );
  }
}
