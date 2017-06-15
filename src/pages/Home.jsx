/*
 * Home
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/14
 */

import React, { Component } from 'react';
import Nav from './Nav';

import '../css/main.scss';

class Home extends Component {
  componentDidMount() {
    // NOTE: gives 400 ms for css to render
    setTimeout(() => {
      document.getElementsByClassName('preloader')[0].style.display = 'none';
    }, 400);
  }

  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default Home;
