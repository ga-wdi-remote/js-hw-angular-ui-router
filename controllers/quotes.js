var express = require('express');
var router = express.Router();
var Quote = require('../models/quote.js');

//grab all saves quotes
router.get('/', function(req, res) {
  Quote.find({}).exec(function(err, quotes){
    if (err) { console.log(err); }
    console.log("FOUND THE QUOTES!", quotes);
    res.json({ quotes });
  });
});

//save a new quote
router.post('/', function(req, res) {
  console.log(req.body.quote);
  var quote = new Quote({name: req.body.quote});
  // console.log(quote);
  // var quote = req.body.quote;
  quote.save(function(err, quote){
    if (err) console.log(err);
    console.log("QUOTE SAVED!", quote);
  });
});

//edit the quote
router.put('/:id', function(req, res){
  console.log("PUUUUTTING");
  console.log(req.body.data);
  Quote.findByIdAndUpdate(req.params.id, req.body.data, {new: true}, function(err, info){
		// console.log("this is the info it found: ", info)
		res.json({info});
	});
});

//delete a quote
router.delete('/:id', function(req, res) {
  var id = req.params.id;

  Quote.remove({_id: id}, function(error) {
    if (error) response.json({message: 'ERROR ' + error});

    res.json({message: 'quote deleted'});
  })
});



module.exports = router;
