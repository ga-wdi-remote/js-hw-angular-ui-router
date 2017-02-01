console.log("Netflix CONTROLLER!");

angular.module('myApp')
  .controller('NetflixController', NetflixController);

NetflixController.$inject = ['$http'];

function NetflixController($http, $state){
  var netflix = this;
  netflix.character = "";
  netflix.getCharacter = getCharacter;
  netflix.movie = "";



  function getCharacter(movieName){
    console.log("WHAT IS THIS:", movieName);
    $http
      .get('http://netflixroulette.net/api/api.php?title=' + movieName).then(function(response){
        console.log(response);
      });
  }

}
