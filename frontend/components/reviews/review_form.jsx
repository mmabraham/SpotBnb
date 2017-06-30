import React from 'react';
import Rating from 'react-rating';

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spot_id: props.spot.id, body: '', rating: 0, hidden: true};
  }

  handleChange(formType) {
    return (e) => {
      this.setState({[formType]: e.target.value});
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({hidden: !this.state.hidden})}>
          review
        </button>
        {this.state.hidden ? null : (
          <form
            className="review-form"
            onSubmit={() => this.props.createReview(this.state)}
          >
            <Rating
              className="rating-stars"
              placeholderRate={this.state.rating}
              placeholder="fa fa-star fa-2x"
              empty="fa fa-star-o fa-2x"
              full="fa fa-star fa-2x"
              onChange={rating => this.setState({ rating })}
            />
            <textArea
              onChange={this.handleChange('body')}
              value={this.state.body}
              />
            <button className="review-submit" >
              Post review
            </button>
          </form>
        )}
      </div>
    );
  }
}
