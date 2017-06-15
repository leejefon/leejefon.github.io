/*
 * Projects
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';
import App from './App';

class Projects extends Component {
  componentDidMount() {
    $('.pt-page').addClass('pt-page-current');
    $('.pt-page').mCustomScrollbar({
      scrollInertia: 8
    });
  }

  componentWillUnmount() {
    $('.pt-page').removeClass('pt-page-current');
  }

  render() {
    return (
      <App>
        <section className="pt-page pt-page-4" data-id="portfolio">
          <div className="border-block-top-110" />
          <div className="section-inner">
            <div className="section-title-block">
              <div className="section-title-wrapper">
                <h2 className="section-title">Projects</h2>
                <h5 className="section-description">My Side Projects</h5>
              </div>
            </div>
          </div>
        </section>
      </App>
    );
  }
}

export default Projects;
