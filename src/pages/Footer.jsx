/*
 * Footer
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/09
 */

import React, { Component } from 'react';
import classNames from 'classnames';
import * as Constants from '../utils/Constants';

import styles from '../css/footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className={classNames(styles.footer, 'container')}>
        <div className="row">
          <div className="col-md-4 text-left">
            &copy; 2017 Jeff Lee
          </div>

          <div className="col-md-4 text-center">
            <a href={Constants.GITHUB_URL} className={classNames(styles.socialIcon)}>
              <i className={classNames('fa', 'fa-github')} />
            </a>
            <a href={Constants.LINKEDIN_URL} className={classNames(styles.socialIcon)}>
              <i className={classNames('fa', 'fa-linkedin')} />
            </a>
            <a href={Constants.TWITTER_URL} className={classNames(styles.socialIcon)}>
              <i className={classNames('fa', 'fa-twitter')} />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
