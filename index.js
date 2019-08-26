"use strict";
const OfflinePlugin = require("offline-plugin");

module.exports = function modify(config, env) {
  const { target } = env;
  if (target === "web") {
    const offlineOptions = {
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
    config.plugins = [...config.plugins, new OfflinePlugin(offlineOptions)];
  }
  return config;
};
