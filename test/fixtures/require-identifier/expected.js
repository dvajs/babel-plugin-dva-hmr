'use strict';

var _dva = require('dva');

var _dva2 = _interopRequireDefault(_dva);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = require('./router');

var app = (0, _dva2.default)();
app.model(require('./models/user'));

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

            ReactDOM.render(React.createElement(RedBox, {
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

app.start();