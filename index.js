"use strict";
const OfflinePlugin = require("offline-plugin");

module.exports = function modify(config, env, webpack, options) {
  const { target } = env;
  if (target === "web") {
    const defaultOptions = {
      externals: ["/"],
      publicPath: "/",
      ServiceWorker: {
        events: true,
        navigateFallbackURL: "/",
        publicPath: "/sw.js"
      },
      autoUpdate: true,
      safeToUseOptionalCaches: true
    };
    config.plugins = [
      ...config.plugins,
      new OfflinePlugin(Object.assign({}, defaultOptions, options))
    ];
  }
  return config;
};
