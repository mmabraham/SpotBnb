import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './session/login_form_container';
import SignupForm from './session/signup_form_container';
import SpotForm from './spots/spot_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from './navbar_container';
import IndexPage from './index_page_container';
import ShowPage from './spots/show_page_container';
import TripsIndex from './trips/trips_index_container';


const App = () => {
  return (
  <div>
  <header>
    <Navbar />
    <Switch>
      <AuthRoute path='/login' component={LoginForm} />
      <AuthRoute path='/signup' component={SignupForm} />
      <ProtectedRoute path='/spots/new' component={SpotForm} />
      <ProtectedRoute path='/mytrips' component={TripsIndex} />
      <Route path='/spots/:id' component={ShowPage} />
      <Route exact path='/' component={IndexPage} />
    </Switch>
  </header>
 </div>
 );
};

export default App;
