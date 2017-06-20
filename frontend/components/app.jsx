import React from 'react';
import { Route } from 'react-router-dom';
import SessionForm from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from './navbar_container';

const App = () => {
  return (
  <div>
   <header>
     <Navbar />
     <AuthRoute path='/login' component={SessionForm} />
     <AuthRoute path='/signup' component={SessionForm} />
   </header>
 </div>
 );
};

export default App;
