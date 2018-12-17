import _ from 'lodash/fp';
import pages from '../../components/Pages';

export const getCurrentPath = () => window.location.pathname;
export const getCurrentHash = () => _.flow(
  _.split('#'),
_.getOr('', 1)
)(window.location.hash);


export const isCurrentPath = testPath => getCurrentPath() === testPath;

export const isHome = () => isCurrentPath(pages.home.path);

export const hashToSection = _.flow(_.split('#'), _.getOr('', '1'), _.toUpper);

export const getHashFromProps = _.getOr({}, ['0', 'location', 'hash']);

export const getHashSectionFromProps = _.flow(getHashFromProps, hashToSection);

const replacePart = (str, pair) => _.replace(pair[0], pair[1], str);

export const getUrl = (route, params) => (_.isEmpty(params)
  ? route
  : _.flow(
    _.toPairs,
    _.reduce(replacePart, route),
  )(params));
