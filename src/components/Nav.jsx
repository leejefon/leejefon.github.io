/*
 * Nav
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/14
 */

import React, { Component } from 'react';
import Tilt from 'react-tilt';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import NavLink from './NavLink';
import Data from '../utils/Data';

class Nav extends Component {
  componentDidMount() {
    $('#site_header').mCustomScrollbar({
      scrollInertia: 8
    });

    $('.menu-toggle').on('click', () => {
      $('#site_header').toggleClass('mobile-menu-hide');
    });

    $('.site-main-menu').on('click', 'a', () => {
      this.mobileMenuHide();
    });

    window.addEventListener('resize', this.mobileMenuHide.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.mobileMenuHide.bind(this));
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
          <Tilt className="my-photo">
            <img src={Data.avatar} alt="Me" />
          </Tilt>

          <div className="site-title-block">
            <h1 className="site-title">Jeff Lee</h1>
          </div>

          <div className="site-nav">
            <ul id="nav" className="site-main-menu">
              <NavLink to="/" icon="home">Home</NavLink>
              <NavLink to="/about" icon="user">About Me</NavLink>
              <NavLink to="/resume" icon="id">Resume</NavLink>
              <NavLink to="/projects" icon="portfolio">Projects</NavLink>
              <NavLink to="/contact" icon="mail">Contact</NavLink>
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
