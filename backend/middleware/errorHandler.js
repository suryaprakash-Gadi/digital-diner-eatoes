const handleError = require('../controllers/errorController');

module.exports = (app) => {
  app.use(handleError);
};