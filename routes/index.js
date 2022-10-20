var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portal' });
});

router.get('/chatrooms', function(req, res, next){
  res.render('chatrooms');
});

router.get('/contribute', function(req, res, next){
  res.render('contribute');
});

router.get('/about', function(req, res, next){
  res.render('about');
});

router.get('/feedback', function(req, res, next){
  res.render('feedback');
});

module.exports = router;
