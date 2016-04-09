'use strict';

angular.module('kitchenApp.routing', ['ngRoute'])
	.config(['$routeProvider','$locationProvider',
  		function($routeProvider,$locationProvider) {
  			$locationProvider.html5Mode(true);
    		$routeProvider.
      			when('/', {
        			templateUrl: 'app/mykitchen/mykitchen.html',
        			controller: 'recipesController as recipesCtrl'
      			}).

      			when('/breakfast', {
        			templateUrl: 'app/breakfast/breakfast.html',
        			controller: 'recipesController as recipesCtrl'
      			}).

      			when('/lunch', {
        			templateUrl: 'app/breakfast/breakfast.html',
        			controller: 'recipesController as recipesCtrl'
      			}).


			    otherwise({
			        redirectTo: '/404'
			    });
  	}]);