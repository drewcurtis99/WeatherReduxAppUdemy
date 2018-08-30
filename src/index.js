import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'; // This was added to the project by searching react promise on google. Then downloading the npm package with this code: npm install --save redux-promise. This is middleware and is applied as an argument to the applyMiddleware function below.

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

// Notes

// Middleware - Has the ability to block, manipulate, or let through actions to the reducers. It acts as a gatekeeper for all actions before they proceed to reducers. When middleware receives an action it investigates it. If that action has a promise as a payload then it stops the action -> waits for the promise to resolve then creates a new action of just the data from that promise to send to the reducers. So middleware unwraps promises so that we only have to work with data rather than access the data through the promise.

