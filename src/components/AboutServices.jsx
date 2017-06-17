/*
 * Services
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Data from '../utils/Data';

class Services extends Component {
  render() {
    return (
      <div>
        <div className="block-title">
          <h3>Services</h3>
        </div>

        <Row>
          {Data.about.services.map(service => (
            <Col sm={6} md={3} className="subpage-block" key={service.title}>
              <div className="service-block">
                <div className="service-info">
                  <i className={`service-icon pe-7s-icon pe-7s-${service.icon}`} />
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Services;
