/*
 * Nav
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/14
 */

import React, { Component } from 'react';

import Data from '../utils/Data';

class Nav extends Component {
  render() {
    return (
      <div>
        <header id="site_header" className="header mobile-menu-hide header-color-light">
          <div className="my-photo tilt-effect">
            <img src={Data.avatar} alt="Me" />
          </div>

          <div className="site-title-block">
            <h1 className="site-title">Jeff Lee</h1>
          </div>

          <div className="site-nav">
            <ul id="nav" className="site-main-menu">
              <li>
                <a className="pt-trigger" href="#home" data-animation="21"><i className="menu-icon pe-7s-icon pe-7s-home" />Home</a>
              </li>
              <li>
                <a className="pt-trigger" href="#about_me" data-animation="17"><i className="menu-icon pe-7s-icon pe-7s-user" />About me</a>
              </li>
              <li>
                <a className="pt-trigger" href="#resume" data-animation="18"><i className="menu-icon pe-7s-icon pe-7s-id" />Resume</a>
              </li>
              <li>
                <a className="pt-trigger" href="#portfolio" data-animation="19"><i className="menu-icon pe-7s-icon pe-7s-portfolio" />Portfolio</a>
              </li>
              <li>
                <a className="pt-trigger" href="#contact" data-animation="20"><i className="menu-icon pe-7s-icon pe-7s-mail" />Contact</a>
              </li>
            </ul>
          </div>
        </header>

        <div className="mobile-header mobile-visible">
          <div className="mobile-logo-container">
            <div className="mobile-site-title">Jeff Lee</div>
          </div>

          <a className="menu-toggle mobile-visible">
            <i className="fa fa-bars" />
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;
