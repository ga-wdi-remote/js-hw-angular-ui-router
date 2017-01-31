var express = require('express');
var router = express.Router();
var Quote = require('../models/quote.js');

router.get('/', function(req, res){
  console.log("Something worked");
});


module.exports = router;
