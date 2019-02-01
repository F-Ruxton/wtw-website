import React, { Component } from 'react';
import _ from 'lodash/fp';
import { fetchImage } from '.';
import Loading from '../../components/Loading';

export const toTagImageRequest = tags => _.map(tag => ({ name: tag, type: 'tag', tag }), tags);

const loaderStyle = {
  height: '30vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function withImageFetch(imageRequest = [], Compt) {
  return class ImageFetchComponent extends Component {
    constructor() {
      super();
      this.state = {
        images: {},
        _mount: false,
        loading: true,
        imageNames: _.compact(_.map('name', imageRequest)),
      };
    }

    async componentDidMount() {
      this._isMount = true;
      this.getImages();
    }

    componentWillUnmount() {
      this._isMount = false;
    }

    async getImages() {
      if (!_.isEmpty(imageRequest)) {
        imageRequest.forEach(async imgRequest => {
          const image = await fetchImage(imgRequest);

          this.setImage(imgRequest.name, image);
        });
      }
      else if (this._isMount) {
        this.setState({ loading: false});
      }
    }

    checkLoading (images) {
      const { state: { imageNames } } = this;

      return _.flow(
        _.keys,
        _.difference(imageNames),
        _.negate(_.isEmpty),
      )(images);
    }

    setImage(name, img) {
      if (_.isUndefined(img)) { return; }

      const { images: oldImages } = this.state;
      const images = _.merge(oldImages, { [name]: img });
      const loading = this.checkLoading(images);

      if (this._isMount) {
        this.setState({ images, loading });
      }
    }

    render() {
      const { props, state } = this;

      return state.loading
        ? <Loading style={loaderStyle} />
        : <Compt {...props} {...state} />;
    }
  }
}
