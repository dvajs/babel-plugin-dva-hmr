import dva from 'dva';

const app = dva();
app.model(require('./models/user'));
app.router(require('./router'));
app.start();
