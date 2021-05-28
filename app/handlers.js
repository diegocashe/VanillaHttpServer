const { indexController } = require('./controller');

const handler = new Map();

handler.set('/', indexController);

module.exports = {
  handler,
};
