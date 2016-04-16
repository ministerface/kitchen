(function(){
	angular
		.module('kitchen')
		.controller('mykitchenController', MykitchenController);

	MykitchenController.$inject = ['recipesPrepService', 'request', '$filter', '$scope'];

	function MykitchenController(recipesPrepService, request, $filter, $scope) {
		var mykitchenCtrl = this;
		mykitchenCtrl.recipes = request.newRecipe;

		$scope.$watch('search', function(val) {
			mykitchenCtrl.filteredRecipes = $filter('filterRecipes')(mykitchenCtrl.recipes, val);
		});
		//request.allRecipe = recipesPrepService;
		//mykitchenCtrl.recipes = recipesPrepService;
	}

})();
