/*
 * Testimonials
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Data from '../utils/Data';

class Testimonials extends Component {
  render() {
    const testimonialCarouselOptions = {
      nav: true,
      items: 3,
      loop: false,
      navText: [],
      margin: 10,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        768: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    };

    return (
      <Row>
        <Col sm={12} md={12} className="subpage-block">
          <div className="block-title">
            <h3>Testimonials</h3>
          </div>

          <OwlCarousel className="testimonials owl-carousel" options={testimonialCarouselOptions}>
            {Data.about.testimonials.map(testimonial => (
              <div className="testimonial-item" key={testimonial.text}>
                <div className="testimonial-content">
                  <div className="testimonial-text">
                    <p>{testimonial.text}</p>
                  </div>
                </div>
                <div className="testimonial-credits">
                  <div className="testimonial-picture">
                    <img src={testimonial.image} alt="" />
                  </div>
                  <div className="testimonial-author-info">
                    <p className="testimonial-author">{testimonial.name}</p>
                    <p className="testimonial-firm">{testimonial.firm}</p>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </Col>
      </Row>
    );
  }
}

export default Testimonials;
