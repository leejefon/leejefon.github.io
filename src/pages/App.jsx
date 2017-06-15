/*
 * App
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/14
 */

import React, { Component } from 'react';
import Nav from './Nav';

import '../css/main.scss';

class App extends Component {
  componentDidMount() {
    // NOTE: gives 400 ms for css to render
    setTimeout(() => {
      document.getElementsByClassName('preloader')[0].style.display = 'none';
    }, 400);
  }

  render() {
    return (
      <div id="page" className="page">
        <Nav />

        <div id="main" className="site-main">
          <div className="pt-wrapper" style={{ backgroundImage: 'url(images/main_bg_light.jpg)' }}>
            <div className="subpages">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
