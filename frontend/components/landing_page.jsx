import React from 'react';
import Searchbar from './search/searchbar_container';

const LandingPage = props => {
  return (
    <main className="landing">
      <div>
        <h1>
          <span className="red">Spotbnb</span>
          <div>
            Book unique homes and experience a city like a local.
          </div>
        </h1>
      </div>
      <Searchbar />

    </main>
  );
};

export default LandingPage;
