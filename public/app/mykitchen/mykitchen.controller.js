(function(){
	angular
    	.module('kitchen')
    	.controller('mykitchenController', MykitchenController);

    MykitchenController.$inject = ['recipesPrepService', 'request'];
  	function MykitchenController(recipesPrepService, request) {
		var mykitchenCtrl = this;
		//request.allRecipe = recipesPrepService;
		mykitchenCtrl.recipes = recipesPrepService;
		//mykitchenCtrl.recipes = request.allRecipe;

	}

})();
