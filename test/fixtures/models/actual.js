import dva from 'dva';
const router = require('./router');

const app = dva();
app.model(require('./models/a').default);
app.model(require('./models/b'));
app.router(router);
app.start();
