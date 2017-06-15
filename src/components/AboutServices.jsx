/*
 * Services
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <div>
        <div className="block-title">
          <h3>Services</h3>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-3 subpage-block">
            <div className="service-block">
              <div className="service-info">
                <i className="service-icon pe-7s-icon pe-7s-browser" />
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 subpage-block">
            <div className="service-block">
              <div className="service-info">
                <i className="service-icon pe-7s-icon pe-7s-pen" />
                <h4>Copywriter</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 subpage-block">
            <div className="service-block">
              <div className="service-info">
                <i className="service-icon pe-7s-icon pe-7s-cart" />
                <h4>E-Commerce</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 subpage-block">
            <div className="service-block">
              <div className="service-info">
                <i className="service-icon pe-7s-icon pe-7s-graph1" />
                <h4>Marketing</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
