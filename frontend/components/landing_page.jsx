import React from 'react';
import Searchbar from './search/searchbar_container';
import Carousel from './spots/carousel_container';

const LandingPage = props => {
  return (
    <main>
      <div className="landing">
        <h1>
          <span className="red">Spotbnb</span>
          <div>
            Book unique homes and experience a city like a local.
          </div>
        </h1>
        <Searchbar />
      </div>
      <Carousel />
    </main>
  );
};

export default LandingPage;
