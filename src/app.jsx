/*
 * app
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/09
 */

import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Home from './pages/Home';
import About from './pages/About';

import './css/main.scss';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route
        render={({ location }) => (
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={3000}
            transitionLeaveTimeout={3000}
          >
            <Route location={location} key={location.key} exact path="/" component={Home} />
            <Route location={location} key={location.key} exact path="/about" component={About} />
            <Route location={location} key={location.key} exact path="/resume" component={Home} />
            <Route location={location} key={location.key} exact path="/projects" component={Home} />
            <Route location={location} key={location.key} exact path="/contact" component={Home} />
          </CSSTransitionGroup>
        )}
      />
    </Router>
  </Provider>,
  document.getElementById('app')
);
