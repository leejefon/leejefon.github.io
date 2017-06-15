/*
 * Testimonials
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';

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
      <div className="row">
        <div className="col-sm-12 col-md-12 subpage-block">
          <div className="block-title">
            <h3>Testimonials</h3>
          </div>

          <OwlCarousel className="testimonials owl-carousel" options={testimonialCarouselOptions}>
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
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Testimonials;
