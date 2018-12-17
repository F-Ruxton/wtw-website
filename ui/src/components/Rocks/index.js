import React from 'react';
import Rock1 from './Rock1';
import Rock2 from './Rock2';
import Rock3 from './Rock3';
import Rock4 from './Rock4';
import pages from '../Pages';
import A     from '../A';
import './styles.css';

const cName = 'Rock';

export const svgLayer  = 'rock-svg';
export const cNameLine = 'rock-line';
export const cNameFill = 'rock-fill';
export const cNameText = 'rock-text';

const Rock = ({ children, ...props }) => <A {...props}><div className={cName}>{children}</div></A>;

export const HomeRock      = props => <Rock {...props} to={pages.home.path}>     <Rock1 /></Rock>;
export const AboutRock     = props => <Rock {...props} to={pages.about.path}>    <Rock2 /></Rock>;
export const PortfolioRock = props => <Rock {...props} to={pages.portfolio.path}><Rock3 /></Rock>;
export const ContactRock   = props => <Rock {...props} to={pages.contact.path}>  <Rock4 /></Rock>;
