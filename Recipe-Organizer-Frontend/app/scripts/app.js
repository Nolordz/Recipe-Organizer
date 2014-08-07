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
            .when('/recipes', {
                templateUrl: 'views/recipes.html',
                controller: 'MainCtrl'
            })
            .when('/recipes/:recipeId', {
                templateUrl: 'views/recipe-detail.html',
                controller: 'RecipeDetailCtrl'
            })
            .when('/add-recipe', {
                templateUrl: 'views/add-recipe.html',
                controller: 'AddRecipeCtrl'
        })
            .otherwise({
                redirectTo: '/'
            });
        RestangularProvider.setBaseUrl('http://localhost:8001');
    });