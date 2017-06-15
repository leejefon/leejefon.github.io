/*
 * Resume
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';
import App from './App';
import Education from '../components/ResumeEducation';
import Experience from '../components/ResumeExperience';

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
                <Education />
              </div>

              <div className="col-sm-6 col-md-4 subpage-block">
                <Experience />
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
