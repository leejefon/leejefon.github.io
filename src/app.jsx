/*
 * app
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/09
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
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
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Home} />
        <Route exact path="/projects" component={Home} />
        <Route exact path="/contact" component={Home} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);
