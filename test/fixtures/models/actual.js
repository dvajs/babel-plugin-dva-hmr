import dva from 'dva';
const router = require('./router');

const app = dva();
app.model(require('./models/a'));
app.model(require('./models/b'));
app.model(require('./models/c'));
app.model(require('./models/d'));
app.router(router);
app.start();
