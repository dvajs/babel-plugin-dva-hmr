import dva from 'dva';
const router = require('./router');

const app = dva();
app.model(require('./models/user'));
app.router(router);
app.start();
