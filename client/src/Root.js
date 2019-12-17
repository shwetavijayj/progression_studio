import React, { Component } from 'react';
import App from './App';
import store from './store';
class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  }
}
export default Root;
