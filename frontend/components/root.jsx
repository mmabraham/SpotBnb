import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <MuiThemeProvider>
        <App/>
      </MuiThemeProvider>
    </HashRouter>
  </Provider>
);

export default Root;
