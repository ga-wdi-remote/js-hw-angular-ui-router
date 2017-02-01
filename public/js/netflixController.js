console.log("Netflix CONTROLLER!");

angular.module('myApp')
  .controller('NetflixController', NetflixController);

NetflixController.$inject = ['$http'];

function NetflixController($http, $state){
  var netflix = this;
  netflix.character = "";
  netflix.getCharacter = getCharacter;
  netflix.movie = "";
  netflix.saveMovie = saveMovie;
  netflix.getSavedMovies = getSavedMovies;
  netflix.deleteMovie = deleteMovie;
  netflix.myMovies = [];

  //retrieve poster image for searched movie
  function getCharacter(movieName){
    console.log("WHAT IS THIS:", movieName);

    $http
      .get('http://netflixroulette.net/api/api.php?title=' + movieName).then(function(response){
        console.log('we getting a response')
        console.log(response.data);
        netflix.poster = response.data.poster;
        netflix.title = response.data.show_title

      });
  }

  //Gets all saved movies
  function getSavedMovies(){
    console.log('get saved movies');
    $http
      .get('/netflix')
      .then(function(response){
        console.log("Got all my movies", response);
        var netflixMovies = response.data.movies;
        netflix.myMovies = netflixMovies;
      });
  }

  //Save movie
  function saveMovie(poster, title){
    console.log('saving movie');
    console.log(poster)
    console.log(title)
    var netflix = {
      poster: poster,
      title: title,
    }
    $http
      .post('/netflix', {netflix: netflix} )
      .then(function(response) {
        console.log(response)
      });
  }

  //Deletes movie
  function deleteMovie(id){
    console.log(id);
    $http
      .delete('/netflix/' + id)
      .then(function(response){
        console.log(response);

        netflix.myMovies.forEach(function(obj, index, array){
          if (obj._id === id){
            array.splice(index, 1);
          }
        });
      });
  }

}

  // //save quote to local database
  // function saveQuote(quote){
  //   $http
  //     .post('/quotes', {quote: quote} )
  //     .then(function(response) {
  //       console.log(response);
  //     });
  // }
