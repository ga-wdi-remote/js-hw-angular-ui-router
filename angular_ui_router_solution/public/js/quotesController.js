console.log("QUOTES CONTROLLER!")

angular.module('myApp')
  .controller('QuotesController', QuotesController);

QuotesController.$inject = ['$http'];

function QuotesController($http, $state){
  var quotes = this;
  quotes.generateQuote = generateQuote;
  quotes.quote = "";
  quotes.saveQuote = saveQuote;
  quotes.editQuote = editQuote;
  quotes.getSavedQuote = getSavedQuote;
  quotes.deleteQuote = deleteQuote;
  quotes.myQuotes = [];

  //grabs random quote from 3rd party API
  function generateQuote(){
    console.log("Clicky poo");
    $http.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(function(response){
      var daQuote = response.data[0];
      console.log(response.data[0]);
      quotes.quote = daQuote;
    });
  }

  function getSavedQuote(){
    $http
      .get('/quotes')
      .then(function(response){
        console.log("Got all my quotes", response);
        var quotesResults = response.data.quotes;
        quotes.myQuotes = quotesResults;
      });
  }

  //save quote to local database
  function saveQuote(quote){
    $http
      .post('/quotes', {quote: quote} )
      .then(function(response) {
        console.log(response);
      });
  }

  function editQuote(quoteID, index){

    $http
      .put('/quotes/'+ quoteID, {data: quotes.myQuotes[index]})
      .then(function(response){
        console.log(response);
      });
  }

  //delete quote from local database AND from the DOM
  function deleteQuote(id){
    console.log(id);
    $http
      .delete('/quotes/' + id)
      .then(function(response){
        console.log(response);

        quotes.myQuotes.forEach(function(obj, index, array){
          if (obj._id === id){
            array.splice(index, 1);
          }
        });
      });
  }

}
