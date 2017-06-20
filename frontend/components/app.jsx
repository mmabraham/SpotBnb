import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from './navbar';

const App = () => {
  return (
  <div>
   <header>
     <h1>Title here</h1>
     <Navbar />
     <AuthRoute path='/login' component={SessionFormContainer} />
     <AuthRoute path='/signup' component={SessionFormContainer} />
   </header>
 </div>
 );
};

export default App;
