(function(){
	angular
    	.module('kitchen')
    	.controller('mykitchenController', MykitchenController);

    MykitchenController.$inject = ['recipesPrepService'];
  	function MykitchenController(recipesPrepService) {
		var mykitchenCtrl = this;

		mykitchenCtrl.recipes = recipesPrepService;
	}

})();
