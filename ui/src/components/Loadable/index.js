import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../Loading';

export default class LoadableComponent extends React.Component {
  render() {
    const LoadableComponent = Loadable({
      loader: this.props.loader,
      loading: Loading
    });

    return <LoadableComponent />
  }
}
