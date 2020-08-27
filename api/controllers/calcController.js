'use strict';

exports.soma = function(req, res) {
  var a = parseFloat(req.query.a);
  var b = parseFloat(req.query.b);
  var result = a + b;
  
  if(isNaN(result)){
    res.json('Por favor, informe apenas números como parâmetro.');
  }
  else{
    res.json(result);
  }
};