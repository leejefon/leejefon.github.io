/*
 * Contact
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';
import App from './App';
import Data from '../utils/Data';

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
        <section className="pt-page pt-page-5" data-id="contact">
          <div className="border-block-top-110" />
          <div className="section-inner">
            <div className="section-title-block">
              <div className="section-title-wrapper">
                <h2 className="section-title">Contact</h2>
                <h5 className="section-description">Get in Touch</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-md-6 subpage-block">
                <div className="block-title">
                  <h3>Get in Touch</h3>
                </div>
                <p>Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae tristique ante. Cras pretium rutrum egestas. Integer ultrices libero sed justo vehicula, eget tincidunt tortor tempus.</p>
                <div className="contact-info-block">
                  <div className="ci-icon">
                    <i className="pe-7s-icon pe-7s-map-marker" />
                  </div>
                  <div className="ci-text">
                    <h5>San Jose, USA</h5>
                  </div>
                </div>
                <div className="contact-info-block">
                  <div className="ci-icon">
                    <i className="pe-7s-icon pe-7s-mail" />
                  </div>
                  <div className="ci-text">
                    <h5>{Data.email}</h5>
                  </div>
                </div>
                <div className="contact-info-block">
                  <div className="ci-icon">
                    <i className="pe-7s-icon pe-7s-call" />
                  </div>
                  <div className="ci-text">
                    <h5>+123 654 78900</h5>
                  </div>
                </div>
                <div className="contact-info-block">
                  <div className="ci-icon">
                    <i className="pe-7s-icon pe-7s-check" />
                  </div>
                  <div className="ci-text">
                    <h5>Freelance Available</h5>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 subpage-block">
                <div className="block-title">
                  <h3>Contact Form</h3>
                </div>
                <form id="contact-form" method="post" action="contact_form/contact_form.php">

                  <div className="messages" />

                  <div className="controls">
                    <div className="form-group">
                      <input id="form_name" type="text" name="name" className="form-control" placeholder="Full Name" required="required" data-error="Name is required." />
                      <div className="form-control-border" />
                      <i className="form-control-icon pe-7s-user" />
                      <div className="help-block with-errors" />
                    </div>

                    <div className="form-group">
                      <input id="form_email" type="email" name="email" className="form-control" placeholder="Email Address" required="required" data-error="Valid email is required." />
                      <div className="form-control-border" />
                      <i className="form-control-icon pe-7s-mail" />
                      <div className="help-block with-errors" />
                    </div>

                    <div className="form-group">
                      <textarea id="form_message" name="message" className="form-control" placeholder="Message for Me" rows="4" required="required" data-error="Please, leave me a message." />
                      <div className="form-control-border" />
                      <i className="form-control-icon pe-7s-comment" />
                      <div className="help-block with-errors" />
                    </div>

                    <input type="submit" className="button btn-send" value="Send message" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </App>
    );
  }
}

export default Contact;
