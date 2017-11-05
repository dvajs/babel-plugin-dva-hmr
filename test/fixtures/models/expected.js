'use strict';

var _dva = require('dva');

var _dva2 = _interopRequireDefault(_dva);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = require('./router');

var app = (0, _dva2.default)();
app.model(require('./models/a'));
app.model(require('./models/b'));

(function () {
  console.log('[HMR] inited with babel-plugin-dva-hmr');

  var router = require('./router');

  app.router(router.default || router);
  app.use({
    onHmr: function onHmr(render) {
      if (module.hot) {
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

          newRender(router.default || router);
        });
      }
    }
  });

  if (module.hot) {
    var modelNamespaceMap = {};

    var model = require('./models/a');

    if (model.default) model = model.default;
    modelNamespaceMap['./models/a'] = model.namespace;
    module.hot.accept('./models/a', function () {
      try {
        app.unmodel(modelNamespaceMap['./models/a']);

        var _model = require('./models/a');

        if (_model.default) _model = _model.default;
        app.model(_model);
      } catch (e) {
        console.error(e);
      }
    });
  }

  if (module.hot) {
    var _modelNamespaceMap = {};

    var _model2 = require('./models/b');

    if (_model2.default) _model2 = _model2.default;
    _modelNamespaceMap['./models/b'] = _model2.namespace;
    module.hot.accept('./models/b', function () {
      try {
        app.unmodel(_modelNamespaceMap['./models/b']);

        var _model3 = require('./models/b');

        if (_model3.default) _model3 = _model3.default;
        app.model(_model3);
      } catch (e) {
        console.error(e);
      }
    });
  }
})();

app.start();