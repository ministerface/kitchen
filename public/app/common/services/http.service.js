(function() {
	'use strict';

	angular
		.module('kitchen')
		.factory('request', request);

	request.$inject = ['$http'];

	function request($http) {

		return {
        	getRecipes: getRecipes,
            addRecipe: addRecipe
    	};

    	function getRecipes() {

        	return $http.get('/api/recipes')
            	.then(getRecipesComplete);

        	function getRecipesComplete(response) {
            	return response.data;
        	}
    	}


        function addRecipe(name, price, time, imageBig) {

            var req = {
                method: 'POST',
                url: 'http://localhost:8080/api/recipes',
                data: { 
                    name: name,
                    price:price,
                    time: time,
                    images:{
                        imageBig: imageBig   
                    }
                }
            }

            return $http(req)
                .then(addRecipesComplete);

            function addRecipesComplete(response) {

               
            }
        }




	}

})();