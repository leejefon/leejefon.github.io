/*
 * FunFacts
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';
import Tilt from 'react-tilt';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Data from '../utils/Data';

class FunFacts extends Component {
  render() {
    return (
      <div>
        <div className="block-title">
          <h3>Fun Facts</h3>
        </div>

        <Row>
          {Data.about.funFacts.map(fact => (
            <Col sm={6} md={3} className="subpage-block" key={fact.title}>
              <Tilt>
                <div className="fun-fact-block gray-bg">
                  <i className={`pe-7s-icon pe-7s-${fact.icon}`} />
                  <h4>{fact.title}</h4>
                  <span className="fun-value">{fact.value}</span>
                </div>
              </Tilt>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default FunFacts;
