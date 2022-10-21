var express = require('express');
const cards = require('../model/cards');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/chatrooms',async function(req, res, next){
  const Cards = await cards.find();
  res.render('chatrooms', {cardsList:Cards});
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

router.get('/chat/:id', async function(req, res, next){
  const channel = await cards.findOne({_id: req.params.id});
  console.log(channel);
  res.render('chat-window',{channel: channel});
});

router.get('/add', function(req, res, next){
  res.render('add', {title:"Add Channel"});
});

router.post('/cardsinfo', async function(req, res, next){
  const card = new cards({
    title: req.body.title, 
    description: req.body.description,
    imgurl: req.body.imgurl
  });

  await card.save();
  res.redirect('/chatrooms');
});

//only for development purposes.
router.get('/delete', async function(req, res, next){
  await cards.remove();
  res.redirect('/');
});




module.exports = router;
