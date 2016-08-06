# babel-plugin-dva-hmr

[![NPM version](https://img.shields.io/npm/v/babel-plugin-hmr-dva.svg?style=flat)](https://npmjs.org/package/babel-plugin-hmr-dva)
[![Build Status](https://img.shields.io/travis/dvajs/babel-plugin-hmr-dva.svg?style=flat)](https://travis-ci.org/dvajs/babel-plugin-hmr-dva)
[![Coverage Status](https://img.shields.io/coveralls/dvajs/babel-plugin-hmr-dva.svg?style=flat)](https://coveralls.io/r/dvajs/babel-plugin-hmr-dva)
[![NPM downloads](http://img.shields.io/npm/dm/babel-plugin-hmr-dva.svg?style=flat)](https://npmjs.org/package/babel-plugin-hmr-dva)

Hmr babel plugin for dva.

---

## Install

```bash
$ npm install babel-plugin-dva-hmr redbox-react@1.x --save-dev
```

## Usage

.babelrc

```javascript
{
  "plugins": [
    ["dva-hmr", {
      "entries": [
        "./src/index.js"
      ]
    }]
  ]
}
```

webpack.config.js for atool-build, [example](https://github.com/dvajs/dva/blob/master/examples/user-dashboard/webpack.config.js)

```javascript
if (env === 'development') {
  webpackConfig.babel.plugins.push(['dva-hmr', {
    entries: [
      './src/index.js',
    ],
  }]);
}
```

## License

MIT
