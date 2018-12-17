import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from '../../Loading';
import { getHashSectionFromProps } from '../../../utils/navigation';

const LoadableHomePage = Loadable({
  loader: () => import('./home'),
  loading: Loading,
});

export default class HomePage extends Component {
  render() {
    return (
      <LoadableHomePage section={getHashSectionFromProps(this.props)} />
    );
  }
}
