angular.module('myApp', ['ui.router'])
  .config(appRouter);

function appRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: '/partials/index.html'
  })
  .state('quotes', {
    url: '/quotes',
    templateUrl: '/partials/quotes.html',
    controller: 'QuotesController as quotes'
  })
  .state('netflix', {
    url: '/netflix',
    templateUrl: '/partials/netflix.html',
    controller: 'NetflixController as netflix'
  });
}
