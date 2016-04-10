(function(){
  'use strict';

  angular
    .module('kitchenApp')
  	.config(ConfigRoutes);

    function ConfigRoutes ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider.
        when('/', {
          templateUrl: 'app/mykitchen/mykitchen.html',
          controller: 'mykitchenController',
          controllerAs: 'mykitchenCtrl'
        }).
        when('/breakfast', {
          templateUrl: 'app/breakfast/breakfast.html',
          controller: 'breakfastController',
          controllerAs: 'breakfastCtrl'
        }).
        when('/lunch', {
          templateUrl: 'app/lunch/lunch.html',
          controller: 'lunchController as lunchCtrl',
          controllerAs: 'lunchCtrl'
        }).
        otherwise({
          redirectTo: '/404'
        });
    }

})();