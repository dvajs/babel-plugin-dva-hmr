'use strict';

var _dva = require('dva');

var _dva2 = _interopRequireDefault(_dva);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = require('./router');

var app = (0, _dva2.default)();
app.model(require('./models/a'));
app.model(require('./models/b'));
app.model(require('./models/c'));
app.model(require('./models/d'));

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

  if (module.hot) {
    (function () {
      var modelNamespaceMap = {};
      modelNamespaceMap['./models/a'] = require('./models/a').namespace;
      module.hot.accept('./models/a', function () {
        try {
          app.unmodel(modelNamespaceMap['./models/a']);
          app.model(require('./models/a'));
        } catch (e) {
          console.error(e);
        }
      });
    })();
  }

  if (module.hot) {
    (function () {
      var modelNamespaceMap = {};
      modelNamespaceMap['./models/b'] = require('./models/b').namespace;
      module.hot.accept('./models/b', function () {
        try {
          app.unmodel(modelNamespaceMap['./models/b']);
          app.model(require('./models/b'));
        } catch (e) {
          console.error(e);
        }
      });
    })();
  }

  if (module.hot) {
    (function () {
      var modelNamespaceMap = {};
      modelNamespaceMap['./models/c'] = require('./models/c').namespace;
      module.hot.accept('./models/c', function () {
        try {
          app.unmodel(modelNamespaceMap['./models/c']);
          app.model(require('./models/c'));
        } catch (e) {
          console.error(e);
        }
      });
    })();
  }

  if (module.hot) {
    (function () {
      var modelNamespaceMap = {};
      modelNamespaceMap['./models/d'] = require('./models/d').namespace;
      module.hot.accept('./models/d', function () {
        try {
          app.unmodel(modelNamespaceMap['./models/d']);
          app.model(require('./models/d'));
        } catch (e) {
          console.error(e);
        }
      });
    })();
  }
})();

app.start();