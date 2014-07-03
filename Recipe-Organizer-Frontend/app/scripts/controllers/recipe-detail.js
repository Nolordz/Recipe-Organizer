'use strict';

/**
 * @ngdoc function
 * @name recipeOrganizerFrontApp.controller:RecipeDetailCtrl
 * @description
 * # RecipeDetailCtrl
 * Controller of the recipeOrganizerFrontApp
 */
angular.module('recipeOrganizerFrontApp')
    .controller('RecipeDetailCtrl', function ($scope, $routeParams, Restangular, $location) {
        $scope.recipeId = $routeParams.recipeId;

        Restangular.one('recipes', $scope.recipeId).customGET().then(function (data) {
            $scope.recipe = data;
        console.log(data);
        });

        $scope.deleteRecipe = function() {
            var response = confirm("Are you sure you want to delete this recipe?");
            if (response == true) {
                Restangular.one('recipes', $scope.recipeId).customDELETE().then(function () {
                    $location.path('/recipes');
                }, function() {
                    $scope.status = "The recipe couldn't be deleted";
                });
            }
        };

    });