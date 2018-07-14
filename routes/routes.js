const user = require('./user');
const msg = require('./message');


module.exports = (app) => {
    app.use('/users', user);
    app.use('/messages', msg);
};
