import React, { Component } from 'react';
import _ from 'lodash/fp';
import classNames from 'classnames';
import { withRouter } from 'react-router';
import A from '../A';
import Image from '../Image';
import Masthead from '../Masthead';
import ScrollTo from '../ScrollTo';
import pages from '../Pages';
import routes from '../Pages/routes';
import { icons } from '../../assets/images'
import './styles.css';

const cName = 'Nav';

const siteLinks = [
  [routes.home,      'Home'],
  [routes.about,     'About'],
  [routes.portfolio, 'Portfolio'],
  [routes.contact,   'Contact'],
];

const SiteLinks = ({ onClick }) => (
  <div className={`${cName}__link--ctr`} onClick={onClick}>
    { _.map(([to, text]) => (
      <div className={`${cName}__link--link`} key={to}>
        <A to={to}>{text}</A>
      </div>
    ), siteLinks) }
  </div>
);

const ScrollTopOnNavigate = withRouter(ScrollTo);

class Nav extends Component {
  constructor() {
    super();
    this.state = { menuOpen: false };
    this.toggleFocus = this.toggleFocus.bind(this);
  }

  toggleFocus() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <div className={cName}>
        <ScrollTopOnNavigate />

        <div className={`${cName}__wrapper`}>
          <div className={`${cName}__masthead`}>
            <A to={pages.home.path}><Masthead /></A>
          </div>

          <div className={`${cName}__dropdown`}>
            <div
              className={`${cName}__dropdown--icon`}
              onClick={this.toggleFocus}
            >
              <Image
                image={icons.menu}
                withBorder={false}
                style={{ height: 30 }}
              />
            </div>
            <div className={classNames(
                `${cName}__dropdown-menu`,
                { [`${cName}__dropdown-menu--open`]: this.state.menuOpen },
              )}>
              <SiteLinks onClick={this.toggleFocus} />
            </div>
            <div
              className={classNames(
                `${cName}__dropdown-menu-outside`,
              { [`${cName}__dropdown-menu-outside--open`]: this.state.menuOpen },
              )}
              onClick={this.toggleFocus}
            />
          </div>

          <div className={`${cName}__buttons`}>
            <A
              className={`${cName}__button`}
              to={routes.home}
            >
              Home
            </A>
            <A
              className={`${cName}__button`}
              to={routes.about}
            >
              About
            </A>
            <A
              className={`${cName}__button`}
              to={routes.portfolio}
            >
              Portfolio
            </A>
            <A
              className={`${cName}__button`}
              to={routes.contact}
            >
              Contact
            </A>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
