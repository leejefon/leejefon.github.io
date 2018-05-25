/*
 * Education
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';
import Data from '../utils/Data';

class Education extends Component {
  render() {
    return (
      <div>
        <div className="block-title">
          <h3>Education</h3>
        </div>
        <div className="timeline">
          {Data.education.map(edu => (
            <div className="timeline-event te-primary">
              <h5 className="event-date">{edu.startTime} - {edu.endTime}</h5>
              <h4 className="event-name">{edu.school}</h4>
              <span className="event-description">{edu.degree}</span>
              <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Education;
