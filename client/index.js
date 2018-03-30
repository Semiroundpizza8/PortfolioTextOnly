import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import ScrollToTop from './scrollToTop'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// establishes socket connection
import './socket'

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)
