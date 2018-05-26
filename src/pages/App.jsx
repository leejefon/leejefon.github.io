/*
 * App
 *
 * @author: Jeff Lee
 * @createdAt: 2018/05/26
 */

import React, { Component } from 'react';

import styles from '../css/main.scss';

class App extends Component {
  render() {
    // const gravatarUrl = 'https://gravatar.com/avatar/9116994a95b11f219055306520647168?s=120';
    const socialMedia = [
      {
        name: 'GitHub',
        icon: 'github',
        url: 'https://github.com/leejefon'
      },
      {
        name: 'LinkedIn',
        icon: 'linkedin',
        url: 'https://linkedin.com/in/leejefon'
      },
      {
        name: 'Twitter',
        icon: 'twitter',
        url: 'https://twitter.com/leejefon'
      }
    ];

    return (
      <div className={`${styles.main} bg-light d-flex flex-column align-items-center justify-content-center p-2`}>
        <h1 className="font-weight-bold text-secondary">Jeff Lee</h1>
        <h2 className="font-weight-light text-secondary">Software Engineer</h2>
        <h3 className="mt-2">
          {socialMedia.map(s => (
            <a href={s.url} title={s.name} key={s.name} className="text-secondary mr-3">
              <i className={`fab fa-${s.icon}`} />
            </a>
          ))}
        </h3>
      </div>
    );
  }
}

export default App;
