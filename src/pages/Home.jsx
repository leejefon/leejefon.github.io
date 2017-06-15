/*
 * Home
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/14
 */

import React, { Component } from 'react';
import App from './App';

class Home extends Component {
  componentDidMount() {
    // Custom Subpage Scroll
    $('.pt-page').mCustomScrollbar({
      scrollInertia: 8
    });
  }

  render() {
    return (
      <App>
        <section className="pt-page section-without-bg section-paddings-0 table">
          <div className="section-inner">
            <div className="home-page-block">
              <h2>Jeff Lee</h2>
              <div className="owl-carousel text-rotation">
                <div className="item">
                  <p className="home-page-description">Software Engineer</p>
                </div>
                <div className="item">
                  <p className="home-page-description">Backend Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </App>
    );
  }
}

export default Home;
