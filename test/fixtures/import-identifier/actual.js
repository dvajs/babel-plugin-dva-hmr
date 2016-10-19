import dva from 'dva';
import router from './router';

const app = dva();
app.model(require('./models/user'));
app.router(router);
app.start();
