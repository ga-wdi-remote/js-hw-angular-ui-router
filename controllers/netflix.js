var express = require('express');
var router = express.Router();
var Netflix = require('../models/netflix.js');

//grab all saves movie
router.get('/', function(req, res) {
  Netflix.find({}).exec(function(err, movies){
    if (err) { console.log(err); }
    console.log("FOUND THE movies!", movies);
    res.json({ movies });
  });
});

//save a new movie
router.post('/', function(req, res) {
  console.log('netflix post be')
  console.log(req.body.netflix);
  var netflix = new Netflix(req.body.netflix);
  // console.log(quote);
  // var quote = req.body.quote;
  netflix.save(function(err, quote){
    if (err) console.log(err);
    console.log("netflix saved!", netflix);
  });
});


//delete a quote
router.delete('/:id', function(req, res) {
  var id = req.params.id;

  Netflix.remove({_id: id}, function(error) {
    if (error) response.json({message: 'ERROR ' + error});

    res.json({message: 'movie deleted'});
  })
});



module.exports = router;
