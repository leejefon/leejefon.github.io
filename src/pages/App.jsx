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
    return (
      <div className={`${styles.main} bg-light d-flex flex-column align-items-center justify-content-center p2`}>
        <h1 className="font-weight-bold text-secondary">Jeff Lee</h1>
        <h2 className="font-weight-light text-secondary">Software Engineer</h2>
      </div>
    );
  }
}

export default App;
