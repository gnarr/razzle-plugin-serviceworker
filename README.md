# razzle-plugin-serviceworker
[![Build Status][1]][2]
[![Coverage Status][3]][4]
[![npm][5]][6]
[![dependencies Status][7]][8]
[![devDependencies Status][9]][10]

[1]: https://travis-ci.org/gnarr/razzle-plugin-serviceworker.svg?branch=master
[2]: https://travis-ci.org/gnarr/razzle-plugin-serviceworker
[3]: https://coveralls.io/repos/github/gnarr/razzle-plugin-serviceworker/badge.svg?branch=master
[4]: https://coveralls.io/github/gnarr/razzle-plugin-serviceworker?branch=master
[5]: https://img.shields.io/npm/v/razzle-plugin-serviceworker.svg?style=flat-square
[6]: https://www.npmjs.com/package/razzle-plugin-serviceworker
[7]: https://david-dm.org/gnarr/razzle-plugin-serviceworker.svg
[8]: https://david-dm.org/gnarr/razzle-plugin-serviceworker
[9]: https://david-dm.org/gnarr/razzle-plugin-serviceworker/dev-status.svg
[10]: https://david-dm.org/gnarr/razzle-plugin-serviceworker?type=dev

A serviceworker for Razzle using offline-plugin.

## Installation

### Node.js

    $ npm install razzle-plugin-serviceworker --save-dev

## Configuration

Edit or create `razzle.config.js` in your project root.

```
// razzle.config.js
module.exports = {
  plugins: ['serviceworker'],
};
```

# License

[ISC](./LICENSE)
