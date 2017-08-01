import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { teal600 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './app';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal600,
  },
});

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <MuiThemeProvider muiTheme={ muiTheme }>
        <App/>
      </MuiThemeProvider>
    </HashRouter>
  </Provider>
);

export default Root;
