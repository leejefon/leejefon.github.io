/*
 * Home
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/14
 */

import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import App from './App';

class Home extends Component {
  componentDidMount() {
    $('.pt-page').addClass('pt-page-current');
    $('.pt-page').mCustomScrollbar({
      scrollInertia: 8
    });

    // HACK: very ugly temporary solution for fixing owl carousel not aligned
    $(window).on('resize', () => this.forceUpdate());
    setTimeout(() => $(window).resize(), 0);
  }

  componentWillUnmount() {
    $('.pt-page').removeClass('pt-page-current');
  }

  render() {
    const textRotationOptions = {
      loop: true,
      dots: false,
      nav: false,
      margin: 10,
      items: 1,
      autoplay: true,
      autoplayHoverPause: false,
      autoplayTimeout: 2500,
      animateOut: 'zoomOut',
      animateIn: 'zoomIn'
    };

    return (
      <App>
        <section className="pt-page section-without-bg section-paddings-0 table">
          <div className="section-inner">
            <div className="home-page-block">
              <h2>Jeff Lee</h2>
              <OwlCarousel options={textRotationOptions}>
                <div className="item">
                  <p className="home-page-description">Software Engineer</p>
                </div>
                <div className="item">
                  <p className="home-page-description">Backend Engineer</p>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
      </App>
    );
  }
}

export default Home;
