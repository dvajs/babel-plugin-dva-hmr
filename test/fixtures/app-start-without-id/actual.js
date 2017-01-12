import { IntlProvider } from 'react-intl';
import ReactDOM from 'react-dom';
import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 4. Router
app.router(require('./router'));

// 5. Start
function render(router) {
  if (router) app._router = router;
  const App = app.start();
  ReactDOM.render(<IntlProvider><App /></IntlProvider>, document.getElementById('root'));
}

app._plugin.apply('onHmr')(render);
render();

