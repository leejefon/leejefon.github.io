/*
 * Resume
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/14
 */

import React, { Component } from 'react';
import App from './App';

class Resume extends Component {
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
        <section className="pt-page" data-id="resume">
          <div className="border-block-top-110" />
          <div className="section-inner">
            <div className="section-title-block">
              <div className="section-title-wrapper">
                <h2 className="section-title">Resume</h2>
                <h5 className="section-description">6 Years of Experience</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-md-4 subpage-block">
                <div className="block-title">
                  <h3>Education</h3>
                </div>
                <div className="timeline">
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">2010</h5>
                    <h4 className="event-name">Specialization Course</h4>
                    <span className="event-description">University of Studies</span>
                    <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                  </div>
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">2009</h5>
                    <h4 className="event-name">Specialization Course</h4>
                    <span className="event-description">University of Studies</span>
                    <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                  </div>
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">2008</h5>
                    <h4 className="event-name">Specialization Course</h4>
                    <span className="event-description">University of Studies</span>
                    <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 subpage-block">
                <div className="block-title">
                  <h3>Experience</h3>
                </div>
                <div className="timeline">
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">Dec 2012 - Current</h5>
                    <h4 className="event-name">Frontend-developer</h4>
                    <span className="event-description">Web Agency</span>
                    <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                  </div>
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">Dec 2011 - Nov 2012</h5>
                    <h4 className="event-name">Web Designer</h4>
                    <span className="event-description">Apple Inc.</span>
                    <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                  </div>
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">Jan 2010 - Dec 2011</h5>
                    <h4 className="event-name">Graphic Designer</h4>
                    <span className="event-description">Web Agency</span>
                    <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 subpage-block">
                <div className="block-title">
                  <h3>Design Skills</h3>
                </div>
                <div className="skills-info">
                  <h4>Web Design</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-1" />
                  </div>

                  <h4>Graphic Design</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-2" />
                  </div>

                  <h4>Print Design</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-3" />
                  </div>
                </div>

                <div className="block-title">
                  <h3>Coding Skills</h3>
                </div>
                <div className="skills-info">
                  <h4>HML5</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-4" />
                  </div>

                  <h4>CSS3</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-5" />
                  </div>

                  <h4>jQuery</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-6" />
                  </div>

                  <h4>Wordpress</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-7" />
                  </div>

                  <h4>PHP</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-8" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="download-cv-block">
                  <a className="button" target="_blank" href="#">Download CV</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </App>
    );
  }
}

export default Resume;
