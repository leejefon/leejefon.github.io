/*
 * Contact
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';
import App from './App';

class Contact extends Component {
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

      </App>
    );
  }
}

export default Contact;
