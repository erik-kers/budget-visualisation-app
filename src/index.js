import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import App from './App';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#eaeae7',
    },
    secondary: {
      main: '#00e676',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
