'use strict';

const createConfig = require('razzle/config/createConfig');
const pluginFunc = require('./index');

describe('razzle-plugin-serviceworker', () => {
  describe('web', () => {
    let config;
    beforeAll(done => {
      config = createConfig('web', 'dev', {
        plugins: [{ func: pluginFunc }],
      });
      done();
    });

    it('should add offline plugin for web target', () => {
      const offlinePluginSettings = config.plugins.slice(-1).pop();
      expect(offlinePluginSettings).not.toBeUndefined();
      const { options } = offlinePluginSettings;
      expect(options).not.toBeUndefined();
      const { ServiceWorker } = options;
      expect(ServiceWorker).not.toBeUndefined();
      const { publicPath } = ServiceWorker;
      expect(publicPath).not.toBeUndefined();
      expect(publicPath).toBe("/sw.js");
    });
  });

  describe('node', () => {
    let config;
    beforeAll(done => {
      config = createConfig('node', 'dev', {
        plugins: [{ func: pluginFunc }],
      });
      done();
    });

    it('should not add offline plugin for node target', () => {
      const offlinePluginSettings = config.plugins.slice(-1).pop();
      expect(offlinePluginSettings).not.toBeUndefined();
      const { options } = offlinePluginSettings;
      expect(options).not.toBeUndefined();
      const { ServiceWorker } = options;
      expect(ServiceWorker).toBeUndefined();
    });
  })
});
