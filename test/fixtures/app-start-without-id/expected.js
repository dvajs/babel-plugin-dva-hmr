'use strict';

var _reactIntl = require('react-intl');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dva = require('dva');

var _dva2 = _interopRequireDefault(_dva);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 1. Initialize
var app = (0, _dva2.default)();

// 4. Router

(function () {
  console.log('[HMR] inited with babel-plugin-dva-hmr');
  app.router(require('./router'));
  app.use({
    onHmr: function onHmr(render) {
      if (module.hot) {
        (function () {
          var renderNormally = render;

          var renderException = function renderException(error) {
            var RedBox = require('redbox-react');

            _reactDom2.default.render(React.createElement(RedBox, {
              error: error
            }), document.querySelector('#root'));
          };

          var newRender = function newRender(router) {
            try {
              renderNormally(router);
            } catch (error) {
              console.error('error', error);
              renderException(error);
            }
          };

          module.hot.accept('./router', function () {
            var router = require('./router');

            newRender(router);
          });
        })();
      }
    }
  });
})();

// 5. Start


function render(router) {
  if (router) app._router = router;
  var App = app.start();
  _reactDom2.default.render(React.createElement(
    _reactIntl.IntlProvider,
    null,
    React.createElement(App, null)
  ), document.getElementById('root'));
}

app._plugin.apply('onHmr')(render);
render();