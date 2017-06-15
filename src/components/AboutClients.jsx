/*
 * Clients
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';

class Clients extends Component {
  render() {
    return (
      <div>
        <div className="block-title">
          <h3>Clients</h3>
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-2 subpage-block">
            <div className="client-block">
              <a href="#" target="_blank"><img src="images/clients/client_1.png" alt="client" /></a>
            </div>
          </div>

          <div className="col-sm-4 col-md-2 subpage-block">
            <div className="client-block">
              <a href="#" target="_blank"><img src="images/clients/client_2.png" alt="client" /></a>
            </div>
          </div>

          <div className="col-sm-4 col-md-2 subpage-block">
            <div className="client-block">
              <a href="#" target="_blank"><img src="images/clients/client_3.png" alt="client" /></a>
            </div>
          </div>

          <div className="col-sm-4 col-md-2 subpage-block">
            <div className="client-block">
              <a href="#" target="_blank"><img src="images/clients/client_4.png" alt="client" /></a>
            </div>
          </div>

          <div className="col-sm-4 col-md-2 subpage-block">
            <div className="client-block">
              <a href="#" target="_blank"><img src="images/clients/client_5.png" alt="client" /></a>
            </div>
          </div>

          <div className="col-sm-4 col-md-2 subpage-block">
            <div className="client-block">
              <a href="#" target="_blank"><img src="images/clients/client_6.png" alt="client" /></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
