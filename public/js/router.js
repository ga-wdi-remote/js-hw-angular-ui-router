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
  // .state('second', {
  //   url: '/second',
  //   templateUrl: '/partials/second.html',
  //   controller: 'secondController as second'
  // });
}
