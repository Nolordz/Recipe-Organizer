'use strict';

/**
 * @ngdoc function
 * @name recipeOrganizerFrontApp.controller:RecipeDetailCtrl
 * @description
 * # RecipeDetailCtrl
 * Controller of the recipeOrganizerFrontApp
 */
angular.module('recipeOrganizerFrontApp')
    .controller('RecipeDetailCtrl', function ($scope, $routeParams, Restangular) {
        $scope.recipeId = $routeParams.recipeId;

        Restangular.one('recipes', $scope.recipeId).customGET().then(function (data) {
            $scope.recipe = data;
        console.log(data);
        });
    });