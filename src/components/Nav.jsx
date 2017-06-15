/*
 * Nav
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/14
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Data from '../utils/Data';

class Nav extends Component {
  componentDidMount() {
    $('.tilt-effect').tilt();

    $('#site_header').mCustomScrollbar({
      scrollInertia: 8
    });

    $('.menu-toggle').on('click', () => {
      $('#site_header').toggleClass('mobile-menu-hide');
    });

    $('.site-main-menu').on('click', 'a', () => {
      this.mobileMenuHide();
    });

    $(window).on('resize', () => {
      this.mobileMenuHide();
    });
  }

  mobileMenuHide() {
    const windowWidth = $(window).width();
    if (windowWidth < 1024) {
      $('#site_header').addClass('mobile-menu-hide');
    }
  }

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
                <Link to="/"><i className="menu-icon pe-7s-icon pe-7s-home" />Home</Link>
              </li>
              <li>
                <Link to="/about"><i className="menu-icon pe-7s-icon pe-7s-user" />About me</Link>
              </li>
              <li>
                <Link to="/resume"><i className="menu-icon pe-7s-icon pe-7s-id" />Resume</Link>
              </li>
              <li>
                <Link to="/projects"><i className="menu-icon pe-7s-icon pe-7s-portfolio" />Projects</Link>
              </li>
              <li>
                <Link to="/contact"><i className="menu-icon pe-7s-icon pe-7s-mail" />Contact</Link>
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
