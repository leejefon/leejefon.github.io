/*
 * App
 *
 * @author: Jeff Lee
 * @createdAt: 2018/05/26
 */

import React, { Component } from 'react';

class App extends Component {
  render() {
    // const gravatarUrl = 'https://gravatar.com/avatar/9116994a95b11f219055306520647168?s=120';
    const socialMedia = [
      {
        name: 'GitHub',
        icon: 'fab fa-github',
        url: 'https://github.com/leejefon'
      },
      {
        name: 'LinkedIn',
        icon: 'fab fa-linkedin',
        url: 'https://linkedin.com/in/leejefon'
      },
      {
        name: 'Twitter',
        icon: 'fab fa-twitter',
        url: 'https://twitter.com/leejefon'
      },
      {
        name: 'Resume',
        icon: 'fas fa-file-pdf',
        url: '/Resume.pdf'
      }
    ];

    return (
      <div className="vh-100 bg-light d-flex flex-column justify-content-center text-center text-secondary p-2" style={{ fontFamily: 'Montserrat' }}>
        <h1 className="font-weight-bold">Jeff Lee</h1>
        <h2 className="font-weight-light">Software Engineer</h2>
        <h3 className="mt-2">
          {socialMedia.map(s => (
            <a href={s.url} title={s.name} key={s.name} className="text-secondary mr-3">
              <i className={s.icon} />
            </a>
          ))}
        </h3>
      </div>
    );
  }
}

export default App;
