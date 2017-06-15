/*
 * About
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/14
 */

import React, { Component } from 'react';
import App from './App';

class About extends Component {
  componentDidMount() {
    // Custom Subpage Scroll
    $('.pt-page').mCustomScrollbar({
      scrollInertia: 8
    });
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
                <h5 className="section-description">Artist, Thinker, Creative Doer</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 subpage-block">
                <div className="my-photo-block tilt-effect">
                  <img src="images/main_photo.jpg" alt="" />
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-4">
                <h3>I am Web Designer @ Company.com</h3>
                <p>Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam, pellentesque enim ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id, dignissim euismod augue.</p>
                <p>Duis sollicitudin, libero porttitor rutrum ultrices, turpis lorem fermentum justo, quis ornare augue tortor non est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-4 subpage-block">
                <ul className="info-list">
                  <li><span className="title">Age</span><span className="value">29</span></li>
                  <li><span className="title">Residence</span><span className="value">Australia</span></li>
                  <li><span className="title">Address</span><span className="value">88 Some Street, Some Town</span></li>
                  <li><span className="title">e-mail</span><span className="value"><a href="mailto:email@example.com">email@example.com</a></span></li>
                  <li><span className="title">Phone</span><span className="value">+0123 123 456 789</span></li>
                  <li><span className="title">Freelance</span><span className="value available">Available</span></li>
                </ul>

                <ul className="social-links">
                  <li><a className="tip social-button" href="#" title="Twitter"><i className="fa fa-twitter" /></a></li>
                  <li><a className="tip social-button" href="#" title="Facebook"><i className="fa fa-facebook" /></a></li>
                  <li><a className="tip social-button" href="#" title="Google Plus"><i className="fa fa-google-plus" /></a></li>
                  <li><a className="tip social-button" href="#" title="Youtube"><i className="fa fa-youtube" /></a></li>
                  <li><a className="tip social-button" href="#" title="Instagram"><i className="fa fa-instagram" /></a></li>
                </ul>
              </div>
            </div>

            <div className="block-title">
              <h3>Services</h3>
            </div>

            <div className="row">
              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="service-block">
                  <div className="service-info">
                    <i className="service-icon pe-7s-icon pe-7s-browser" />
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="service-block">
                  <div className="service-info">
                    <i className="service-icon pe-7s-icon pe-7s-pen" />
                    <h4>Copywriter</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="service-block">
                  <div className="service-info">
                    <i className="service-icon pe-7s-icon pe-7s-cart" />
                    <h4>E-Commerce</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="service-block">
                  <div className="service-info">
                    <i className="service-icon pe-7s-icon pe-7s-graph1" />
                    <h4>Marketing</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              </div>
            </div>

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

            <div className="row">
              <div className="col-sm-12 col-md-12 subpage-block">
                <div className="block-title">
                  <h3>Testimonials</h3>
                </div>
                <div className="testimonials owl-carousel">
                  <div className="testimonial-item">
                    <div className="testimonial-content">
                      <div className="testimonial-text">
                        <p>"Phasellus eu nunc tincidunt, ultricies elit vitae, pretium eros. Sed sed ipsum sed massa."</p>
                      </div>
                    </div>
                    <div className="testimonial-credits">
                      <div className="testimonial-picture">
                        <img src="images/testimonials/testimonial_photo_1.jpg" alt="" />
                      </div>
                      <div className="testimonial-author-info">
                        <p className="testimonial-author">Maria Richardson</p>
                        <p className="testimonial-firm">Lindsley's Lumber</p>
                      </div>
                    </div>
                  </div>

                  <div className="testimonial-item">
                    <div className="testimonial-content">
                      <div className="testimonial-text">
                        <p>"Vivamus porta dapibus tristique. Suspendisse et arcu eget nisi convallis eleifend nec ac lorem."</p>
                      </div>
                    </div>
                    <div className="testimonial-credits">
                      <div className="testimonial-picture">
                        <img src="images/testimonials/testimonial_photo_2.jpg" alt="" />
                      </div>
                      <div className="testimonial-author-info">
                        <p className="testimonial-author">John Doe</p>
                        <p className="testimonial-firm">Apple Inc.</p>
                      </div>
                    </div>
                  </div>

                  <div className="testimonial-item">
                    <div className="testimonial-content">
                      <div className="testimonial-text">
                        <p>"Aliquam congue auctor lectus sed fermentum. Nulla ultricies tellus quis sapien lacinia egestas."</p>
                      </div>
                    </div>
                    <div className="testimonial-credits">
                      <div className="testimonial-picture">
                        <img src="images/testimonials/testimonial_photo_3.jpg" alt="" />
                      </div>
                      <div className="testimonial-author-info">
                        <p className="testimonial-author">George McQueen</p>
                        <p className="testimonial-firm">Harmony House</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="block-title">
              <h3>Fun Facts</h3>
            </div>

            <div className="row">
              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="fun-fact-block gray-bg tilt-effect">
                  <i className="pe-7s-icon pe-7s-smile" />
                  <h4>Happy Clients</h4>
                  <span className="fun-value">1,024</span>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 subpage-block tilt-effect">
                <div className="fun-fact-block">
                  <i className="pe-7s-icon pe-7s-alarm" />
                  <h4>Working Hours</h4>
                  <span className="fun-value">6,256</span>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 subpage-block tilt-effect">
                <div className="fun-fact-block gray-bg">
                  <i className="pe-7s-icon pe-7s-medal" />
                  <h4>Awards Won</h4>
                  <span className="fun-value">21</span>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 subpage-block tilt-effect">
                <div className="fun-fact-block">
                  <i className="pe-7s-icon pe-7s-coffee" />
                  <h4>Coffee Consumed</h4>
                  <span className="fun-value">20,000</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </App>
    );
  }
}

export default About;
