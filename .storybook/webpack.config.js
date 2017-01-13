// load the default config generator.
var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');

module.exports = function(config, env) {
  var config = genDefaultConfig(config, env);

  // Extend it as you need.
  config.module.loaders.push({
          test: /\.less$/,
          loaders: ["style", "css", "less"]
      });
  config.externals= {
        "pubsub-js":"PubSub"
  };
  return config;
};