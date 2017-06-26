import React from 'react';

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="searchbar">
        <label>
          Where
          <input
            ref={ref => this.place = ref}
            placeholder={this.state.location || 'Address'}
            className={this.props.errors && this.props.errors.lng ? 'invalid' : null}
          />
        </label>
      </div>
    );
  }
}
