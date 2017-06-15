/*
 * Experience
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default Experience;
