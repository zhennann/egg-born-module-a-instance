// eslint-disable-next-line
module.exports = appInfo => {
  const config = {};

  // middlewares
  config.middlewares = {
    instance: {
      global: true,
      dependencies: 'cachemem',
      ignore: /(\/version\/(start|check|update|initModule)|\/a\/instance\/version\/init|\/a\/version\/version\/init)/,
    },
  };

  // cache
  config.cache = {
    timeout: 1 * 24 * 3600 * 1000, // 1 天
  };

  return config;
};
