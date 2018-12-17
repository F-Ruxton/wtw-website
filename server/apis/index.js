const _ = require('lodash/fp');

const cloudinaryApi = require('./cloudinary');

const apis = [
  cloudinaryApi,
];

// module.exports = apis

function installAction(app, actionObj) {
  const name   = _.get('name',   actionObj);
  const method = _.get('method', actionObj);
  const route  = _.get('route',  actionObj);
  const action = _.get('action', actionObj);

  if (_.isUndefined(method)) {
    throw new Error(name + ": method is undefined");
  }
  if (_.isUndefined(route)) {
    throw new Error(name + ": route is undefined");
  }
  if (_.isUndefined(action)) {
    throw new Error(name + ": action is undefined");
  }

  console.log('install action: ');
  console.log(JSON.stringify(actionObj, null, 4));
  console.log(_.join('/', ['api', route]));

  app[method](_.join('/', ['api', route]), action);
}

module.exports = function(app) {
  apis.forEach(api => api.forEach(a => {
    const method = a.method;
    const route  = '/api/' + a.route;
    const action = a.action;

    app[method](route, action);
  }));
}

// function register(app) {
//   _.map(
//     api => _.map(action => installAction(app, action), api),
//     apis,
//   );
// }

// module.exports = {
//   register: register,
// };
