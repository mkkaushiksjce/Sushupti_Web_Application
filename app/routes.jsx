import React  from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, withRouter } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import Main from './App';

//Root reducers
import reducers from './reducers';

import HomePage from './home_page/home_page';

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    app: reducers,
    routing: routerReducer
  }),
  applyMiddleware(thunk)
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

//If the user is not logged in and try to go back to private page redirect to login
function isUserLoggedIn(nextState,replace){
  const state = store.getState();
  const appState = state.app;
  const userData = appState.auth && appState.auth.userData;

  if (!userData) {
    replace({ nextPathname: nextState.location.pathname }, '/login');
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <Router history = {history} component = {Main}>
          <Route path = "/" component = {HomePage} />
        </Router>
      </Provider>
    );
  }
}
