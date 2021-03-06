const routes = require('./routes.js');
const services = require('./services.js');
const config = require('./config/config.js');
const locales = require('./config/locales.js');
const errors = require('./config/errors.js');
const middlewares = require('./config/middlewares.js');

// eslint-disable-next-line
module.exports = app => {

  // models
  const models = require('./models.js')(app);
  // meta
  const meta = require('./meta.js')(app);

  return {
    routes,
    services,
    config,
    locales,
    errors,
    middlewares,
    models,
    meta,
  };

};
