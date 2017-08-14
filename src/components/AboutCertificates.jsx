/*
 * Certificates
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Data from '../utils/Data';

class Certificates extends Component {
  render() {
    return (
      <div>
        <div className="block-title">
          <h3>Certificates</h3>
        </div>

        <Row>
          {Data.about.certifications.map(certificate => (
            <Col sm={4} md={2} className="subpage-block" key={certificate.name}>
              <div className="certificate-block">
                <a href={certificate.url} title={certificate.name} target="_blank">
                  <img src={certificate.logo} alt={certificate.name} />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Certificates;
