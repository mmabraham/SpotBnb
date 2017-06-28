import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout } from './actions/session_actions';


// ---------- FOR TESTING ONLY ----------
//   == REMOVE == BEFORE == FLIGHT ==

import * as spotActions from './actions/spot_actions';
import * as sessionActions from './actions/session_actions';
import * as filterActions from './actions/filter_actions';
import * as bookingActions from './actions/booking_actions';




document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = { session: { user: window.currentUser } };
  const store = window.currentUser ? configureStore(preloadedState) : configureStore();
  window.currentUser = null;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);









  // ---------- FOR TESTING ONLY ----------
  //   == REMOVE == BEFORE == FLIGHT ==

  // window.dispatch = store.dispatch;
  // window.spotActions = spotActions;
  // window.sessionActions = sessionActions;
  // window.filterActions = filterActions;
  // window.bookingActions = bookingActions;







});
