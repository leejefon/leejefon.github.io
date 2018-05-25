/*
 * NavLink
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/16
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class NavLink extends Component {
  render() {
    const currentRoute = this.context.router.route.match.url;

    // TODO: disable current link
    return (
      <li className={classNames({ active: currentRoute === this.props.to })}>
        <Link to={this.props.to}>
          <i className={classNames('menu-icon', 'pe-7s-icon', `pe-7s-${this.props.icon}`)} />
          {this.props.children}
        </Link>
      </li>
    );
  }
}

// NavLink.propTypes = {
//   to: PropTypes.string,
//   icon: PropTypes.string,
//   children: PropTypes.any
// };

NavLink.contextTypes = {
  router: PropTypes.object
};

export default NavLink;
