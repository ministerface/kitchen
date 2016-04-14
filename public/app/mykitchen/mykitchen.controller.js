(function(){
	angular
    	.module('kitchen')
    	.controller('mykitchenController', MykitchenController);

    MykitchenController.$inject = ['recipesPrepService', 'request'];

  	function MykitchenController(recipesPrepService, request) {
		var mykitchenCtrl = this;
		mykitchenCtrl.recipes = request.newRecipe;
		//request.allRecipe = recipesPrepService;
		//mykitchenCtrl.recipes = recipesPrepService;
	}

})();
