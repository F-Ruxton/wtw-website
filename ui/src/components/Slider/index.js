import React from 'react';
import classNames from 'classnames';
import Slider from "react-slick";
import _ from 'lodash/fp';
import './styles.css';

const cName = 'Slider';
const cNameArrow = `${cName}__arrow`;
const SliderArrow = ({ className, onClick, isRight = false }) => (
  <div
    className={classNames(className, cNameArrow, `${cNameArrow}--${isRight ? 'right' : 'left'}`)}
    onClick={onClick}
  >
    {/* <div className=/> */}
  </div>
);

const defaultSettings = {
  className: cName,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  accessibility: true,
  centerMode: true,
  centerPadding: '50px',
  // variableWidth: true,
  prevArrow: <SliderArrow />,
  nextArrow: <SliderArrow isRight />,
};

export const lazyLoadSettings = {
  className: cName,
  dots: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // nextArrow: <SliderArrow />,
  // prevArrow: <SliderArrow />,
};

export default class SimpleSlider extends React.Component {
  render() {
    const {
      props: {
        children,
        settings: customSettings,
      }
    } = this;

    return (
      <Slider {..._.defaultsDeep(defaultSettings, customSettings)}>
        {children}
      </Slider>
    );
  }
}
