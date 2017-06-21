import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = { session: { user: window.currentUser } };
  const store =  window.currentUser ? configureStore(preloadedState) : configureStore();
  window.currentUser = null;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
