'use strict';

/**
 * @ngdoc function
 * @name recipeOrganizerFrontendApp.controller:AddRecipeCtrl
 * @description
 * # AddRecipeCtrl
 * Controller of the recipeOrganizerFrontendApp
 */
angular.module('recipeOrganizerFrontApp')
    .controller('AddRecipeCtrl', function ($scope, Restangular) {
        $scope.recipe = {};
        $scope.saveNewRecipe = function () {

            Restangular.all('add-recipe').customPOST($scope.recipe).then(function () {
                $scope.status = alert("The recipe was successfully created!");
                $scope.recipe = {}

            }, function () {
                $scope.status = "The recipe couldn't be saved";
            });
        };
    });
