/*
 * Clients
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Data from '../utils/Data';

class Clients extends Component {
  render() {
    return (
      <div>
        <div className="block-title">
          <h3>Clients</h3>
        </div>

        <Row>
          {Data.about.clients.map(client => (
            <Col sm={4} md={2} className="subpage-block" key={client.name}>
              <div className="client-block">
                <a href={client.url} title={client.name} target="_blank">
                  <img src={client.logo} alt={client.name} />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Clients;
