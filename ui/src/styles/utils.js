import _ from 'lodash/fp';

const toInt = unit => height => _.toNumber(_.replace(unit, '', height));

export const getHeightOffset = (heights = [], unit = 'px') => (
  _.flow(
    _.map(toInt(unit)),
    _.sum,
    sum => `${sum}${unit}`
  )(heights)
);

