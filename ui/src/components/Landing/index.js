import React, { Component } from 'react';
import _ from 'lodash/fp';
import FillImage from '../FillImage';
import Loading from '../Loading';
import './styles.css';

// import { Image } from 'cloudinary-react';

const cName = 'Landing';

class Landing extends Component {
  render() {
    const { img } = this.props;

    return _.isEmpty(img)
      ? <Loading />
      : (
      <div className={cName}>
        <FillImage
          className={`${cName}__img`}
          image={{ src: img.url }}
        />

        <div className={`${cName}__tagline`}>
          <div>
            Crafting Flow
          </div>
          <div>
            in the Landscape
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
