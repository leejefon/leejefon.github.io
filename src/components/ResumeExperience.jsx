/*
 * Experience
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';
import Data from '../utils/Data';

class Experience extends Component {
  render() {
    return (
      <div>
        <div className="block-title">
          <h3>Experience</h3>
        </div>
        <div className="timeline">
          {Data.experiences.filter(exp => !exp.hide).map(exp => (
            <div className="timeline-event te-primary">
              <h5 className="event-date">{exp.startTime} - {exp.endTime}</h5>
              <h4 className="event-name">{exp.position}</h4>
              <span className="event-description">{exp.employer}</span>
              <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Experience;
