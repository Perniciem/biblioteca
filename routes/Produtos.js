var express = require('express');
var router = express.Router();

/*GET users listings*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*GET users listings*/
router.get('/verificacao', function(req, res, next) {
  res.send('Algo deu certo.');
});

/*GET users listings*/
router.get('/data', function(req, res, next) {
  res.send('Data dos Produtos.');
});

/*GET users listings*/
router.get('/listas', function(req, res, next) {
  res.send('Lista dos Produtos.');
});

