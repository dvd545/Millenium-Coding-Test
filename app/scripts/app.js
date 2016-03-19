'use strict';

/**
 * @ngdoc overview
 * @name milleniumApp
 * @description
 * # milleniumApp
 *
 * Main module of the application.
 */
angular
  .module('milleniumApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      })
      $locationProvider.html5Mode(true);

  })

    .directive("data", function(){
        return {
            template: "<td>{{data.Name}}</td><td>{{data.Email}}</td><td>{{data.Country}}</td>",
            replace: false,
            scope: {
                data: "="            }
        };
        
    });
