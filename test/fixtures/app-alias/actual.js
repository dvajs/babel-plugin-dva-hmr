import dva from 'dva';

const a = dva();
a.model(require('./models/user'));
a.router(require('./router'));
a.start();
