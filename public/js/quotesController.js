console.log("QUOTES CONTROLLER!")

angular.module('myApp')
  .controller('QuotesController', QuotesController);

QuotesController.$inject = ['$http'];


function QuotesController($http, $state){
  var quotes = this;
  quotes.message = " I WORK!!!";
  quotes.getQuote = getQuote;
  quotes.quote = "";

  function getQuote(){
    console.log("Clicky poo");
    $http.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(function(response){
      var daQuote = response.data[0];
      console.log(response.data[0]);
      quotes.quote = daQuote;
    });
  }
}
