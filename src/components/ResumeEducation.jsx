/*
 * Education
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default Education;
