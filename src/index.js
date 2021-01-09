import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

// To create a redux-store
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer/reducer'

const initState = {
  restautantsList: [],
  filterOptions: [],
  restaurantDetails: []
}

const store = createStore(reducer, initState)

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
