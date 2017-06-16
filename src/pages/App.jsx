/*
 * App
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/14
 */

import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Nav from '../components/Nav';

import '../css/main.scss';

class App extends Component {
  componentDidMount() {
    $(window)
      .on('load', () => {
        // Animation on Page Loading
        $('.preloader').fadeOut('slow');
      });
  }

  render() {
    return (
      <div id="page" className="page">
        <Nav />

        <div id="main" className="site-main">
          <div className="pt-wrapper" style={{ backgroundImage: 'url(images/main_bg_light.jpg)' }}>
            <div className="subpages">
              <CSSTransitionGroup
                transitionName="fade"
                transitionAppear
                transitionAppearTimeout={800}
                transitionEnter={false}
                transitionLeave={false}
              >
                {this.props.children}
              </CSSTransitionGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
