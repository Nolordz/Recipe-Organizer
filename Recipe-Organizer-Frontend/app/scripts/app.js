'use strict';

/**
 * @ngdoc overview
 * @name recipeOrganizerFrontApp
 * @description
 * # recipeOrganizerFrontApp
 *
 * Main module of the application.
 */
angular
    .module('recipeOrganizerFrontApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'restangular'
    ])
    .config(function ($routeProvider, RestangularProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/recipes/:recipeId', {
   
             templateUrl: 'views/recipe-detail.html',
                controller: 'RecipeDetailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        RestangularProvider.setBaseUrl('http://localhost:8001');
    });