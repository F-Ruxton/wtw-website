import _ from 'lodash/fp';

export const contactTypes = {
  EMAIL: 'EMAIL',
  MOBILE: 'MOBILE',
  WEBSITE: 'WEBSITE',
  INSTAGRAM: 'INSTAGRAM',
  FACEBOOK: 'FACEBOOK',
  FIRST_NAME: 'FIRST_NAME',
  LAST_NAME: 'LAST_NAME',
  FULL_NAME: 'FULL_NAME',
};

export const contactNames = {
  INFO:  'INFO',
  JAMES: 'JAMES',
  FRED:  'FRED',
  KIERAN:  'KIERAN',
};

const {
  EMAIL, MOBILE, WEBSITE, INSTAGRAM, FACEBOOK, FIRST_NAME, LAST_NAME, FULL_NAME,
} = contactTypes;
const { INFO, JAMES, FRED, KIERAN } = contactNames;

const contacts = {
  [INFO]:  {
    [EMAIL]: 'info@wharncliffetrailworks.com'
  },
  [FRED]: {
    [FIRST_NAME]: 'Fred',
    [LAST_NAME]: 'Ruxton',
    [EMAIL]: 'fred@wharncliffetrailworks.com',
    [MOBILE]: {
      extension: '+44',
      number: '7450 063 887',
    },
  },
  [JAMES]: {
    [FIRST_NAME]: 'James',
    [LAST_NAME]: 'Pettitt',
    [EMAIL]: 'james@wharncliffetrailworks.com',
    [MOBILE]: {
      extension: '+44',
      number: '7919 247 343',
    },
    [INSTAGRAM]: 'https://www.instagram.com/jp_sculpt/?hl=en',
  },
  [KIERAN]: {
    [FIRST_NAME]: 'Kieran',
    [LAST_NAME]: 'Kenney',
    [WEBSITE]: 'https://685701.portfoliobox.net/',
    [FACEBOOK]: 'https://www.facebook.com/kkenneyphoto/',
  },
};

const getMobile = name => {
  const { extension, number } = _.get([name, MOBILE], contacts);

  return _.join(' ', [extension, number]);
};

const getFullName = name =>
  _.join(' ', [_.get([name, FIRST_NAME], contacts), _.get([name, LAST_NAME], contacts)]);

const getContact = (type, name) => {
  if (type === MOBILE) {    return getMobile(name); }
  if (type === FULL_NAME) { return getFullName(name); }

  return _.get([name, type], contacts);
};

export default getContact;
