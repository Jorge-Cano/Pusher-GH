var express = require('express');
var router = express.Router();
var Chat = require('../models/chat');


//Get a chat
router.get('/', function(req, res, next) {
  Chat.find({}, function(err, chat) {

    if(err) {
      console.error(err)
    }
    res.json(chat)
  });
});


//add a chat
router.post('/', function(req, res, next) {
  var newChat = new Chat({
    question: req.body.question,
    id: Date.now()
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
