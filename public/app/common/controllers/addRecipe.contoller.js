(function(){
	'use strict';
	angular
		.module('kitchen')
		.controller('addRecipeController', AddRecipeController);

	AddRecipeController.$inject = ['request'];

	function AddRecipeController(request) {
		var addRecipeCtrl = this;
		addRecipeCtrl.buttonText = 'Добавить рецепт';
		addRecipeCtrl.addRecipe = request.addRecipe;
	}





})();
