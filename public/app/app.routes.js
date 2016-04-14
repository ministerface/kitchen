(function(){
    'use strict';

    angular
        .module('kitchen.router', ['ui.router'])
    	.config(ConfigRoutes);

    ConfigRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function ConfigRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise("/404");
 
        $stateProvider
            .state('mykitchen', {
                url: "/",
                templateUrl: "app/mykitchen/mykitchen.html",
                controller: "mykitchenController",
                controllerAs: "mykitchenCtrl",
                resolve: {
                    recipesPrepService: recipesPrepService
                }
            })
            .state('breakfast', {
                url: "/breakfast",
                templateUrl: "app/breakfast/breakfast.html",
                controller: "breakfastController",
                controllerAs: "breakfastCtrl"
            })
            .state('lunch', {
                url: "/lunch",
                templateUrl: 'app/lunch/lunch.html',
                controller: 'lunchController as lunchCtrl',
                controllerAs: 'lunchCtrl'
            });
    }

    recipesPrepService.$inject = ['request'];
    
    function recipesPrepService(request) {
        return request.getRecipes();
    }

})();