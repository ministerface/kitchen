(function() {
	'use strict';

	angular
		.module('kitchen')
		.factory('request', request);

	request.$inject = ['$http'];

	function request($http) {
		return {
        	getRecipes: getRecipes
    	};

    	function getRecipes() {
        	return $http.get('/api/recipes')
            	.then(getRecipesComplete);

        	function getRecipesComplete(response) {
            	return response.data;
        	}
    	}
	}

})();