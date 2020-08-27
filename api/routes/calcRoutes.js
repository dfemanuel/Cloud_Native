'use strict';

module.exports = function(app) {
  var calculadora = require('../controllers/calcController');

  // todoList Routes
  app.route('/sum')
    .get(calculadora.soma)
};
