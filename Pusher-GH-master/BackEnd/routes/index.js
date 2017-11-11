var express = require('express');
var router = express.Router();
var Chat = require('../models/chat');

/* GET home page. */
router.get('/', function(req, res, next) {
  Chat.find({}, function(err, chatmessages) {

    if(err) {
      console.error(err)
    }
    res.json(chat)
  });
});


//add a Chat
router.post('/', function(req, res, next) {
  var newChat = new chat({
    question: req.body.question
  });

  newChat.save(function(err, chat) {
    if(err) {
      res.status(500).send({
        status: 'Error',
        error: err
      });
    } else {
      res.status(200).send({
        status: 'OK',
        chat: chat
      });
    }
  });
});

module.exports = router;
