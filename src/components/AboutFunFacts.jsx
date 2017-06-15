/*
 * FunFacts
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';
import Tilt from 'react-tilt';

class FunFacts extends Component {
  render() {
    return (
      <div>
        <div className="block-title">
          <h3>Fun Facts</h3>
        </div>

        <div className="row">
          <Tilt className="col-sm-6 col-md-3 subpage-block">
            <div className="fun-fact-block gray-bg">
              <i className="pe-7s-icon pe-7s-smile" />
              <h4>Happy Clients</h4>
              <span className="fun-value">1,024</span>
            </div>
          </Tilt>

          <Tilt className="col-sm-6 col-md-3 subpage-block">
            <div className="fun-fact-block">
              <i className="pe-7s-icon pe-7s-alarm" />
              <h4>Working Hours</h4>
              <span className="fun-value">6,256</span>
            </div>
          </Tilt>

          <Tilt className="col-sm-6 col-md-3 subpage-block">
            <div className="fun-fact-block gray-bg">
              <i className="pe-7s-icon pe-7s-medal" />
              <h4>Awards Won</h4>
              <span className="fun-value">21</span>
            </div>
          </Tilt>

          <Tilt className="col-sm-6 col-md-3 subpage-block">
            <div className="fun-fact-block">
              <i className="pe-7s-icon pe-7s-coffee" />
              <h4>Coffee Consumed</h4>
              <span className="fun-value">20,000</span>
            </div>
          </Tilt>
        </div>
      </div>
    );
  }
}

export default FunFacts;
