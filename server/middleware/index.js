const bodyParser = require('body-parser');
const cors       = require('cors');
const config     = require('../config');

const corsConfig = {
  origin: ['http://localhost:' + config.CONSTANTS.PORT],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};

module.exports = middleware = [
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  cors(corsConfig),
];

function install(app) {
  middleware.forEach(ware => app.use(ware));
}

module.exports = {
  install: install,
};
