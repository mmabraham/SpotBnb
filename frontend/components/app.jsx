import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './session/login_form_container';
import SignupForm from './session/signup_form_container';
import SpotForm from './spots/spot_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from './navbar_container';
import IndexPage from './index_page_container';
import ShowPage from './spots/show_page_container';


const App = () => {
  return (
  <div>
  <header>
    <Navbar />
    <AuthRoute path='/login' component={LoginForm} />
    <AuthRoute path='/signup' component={SignupForm} />
    <ShowPage />
    <Route exact path='/' component={IndexPage} />
    <ProtectedRoute path='/new/spot' component={SpotForm} />
  </header>
 </div>
 );
};

export default App;
