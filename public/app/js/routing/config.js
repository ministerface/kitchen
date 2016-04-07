'use strict';

angular.module('kitchenApp.routing', ['ngRoute'])
	.config(['$routeProvider','$locationProvider',
  		function($routeProvider,$locationProvider) {
  			$locationProvider.html5Mode(true);
    		$routeProvider.
      			when('/', {
        			templateUrl: 'app/js/mykitchen/mykitchen.html',
        			controller: 'recipesController as recipesCtrl'
      			}).

      			when('/breakfast', {
        			templateUrl: 'app/js/breakfast/breakfast.html',
        			controller: 'recipesController as recipesCtrl'
      			}).

      			when('/lunch', {
        			templateUrl: 'app/js/breakfast/breakfast.html',
        			controller: 'recipesController as recipesCtrl'
      			}).

			    
			    otherwise({
			        redirectTo: '/404'
			    });
  	}]);