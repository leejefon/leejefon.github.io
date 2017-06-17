/*
 * About
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/14
 */

import React, { Component } from 'react';
import Tilt from 'react-tilt';
import App from './App';
import Testimonials from '../components/AboutTestimonials';
import FunFacts from '../components/AboutFunFacts';
import Services from '../components/AboutServices';
import Clients from '../components/AboutClients';

import Data from '../utils/Data';

class About extends Component {
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
        <section className="pt-page">
          <div className="border-block-top-110" />
          <div className="section-inner">
            <div className="section-title-block">
              <div className="section-title-wrapper clearfix">
                <h2 className="section-title">About Me</h2>
                <h5 className="section-description">{Data.title.join(', ')}</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 subpage-block">
                <Tilt className="my-photo-block">
                  <img src="images/main_photo.jpg" alt="" />
                </Tilt>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-4">
                <h3>I am Web Designer @ Company.com</h3>
                <p>Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam, pellentesque enim ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id, dignissim euismod augue.</p>
                <p>Duis sollicitudin, libero porttitor rutrum ultrices, turpis lorem fermentum justo, quis ornare augue tortor non est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-4 subpage-block">
                <ul className="info-list">
                  <li><span className="title">Residence</span><span className="value">Australia</span></li>
                  <li><span className="title">e-mail</span><span className="value"><a href={`mailto:${Data.email}`}>{Data.email}</a></span></li>
                </ul>

                <ul className="social-links">
                  {Data.social.map(media => (
                    <li key={media.name}>
                      <a className="tip social-button" href={media.url} title={media.name}>
                        <i className={`fa fa-${media.icon}`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Services />
            <Clients />
            <Testimonials />
            <FunFacts />
          </div>
        </section>
      </App>
    );
  }
}

export default About;
