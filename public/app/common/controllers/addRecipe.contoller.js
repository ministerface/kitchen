(function(){
	'use strict';
	angular
		.module('kitchen')
		.controller('addRecipeController', AddRecipeController);

	AddRecipeController.$inject = ['request', 'ngDialog'];

	function AddRecipeController(request, ngDialog) {
		var addRecipeCtrl = this;

		addRecipeCtrl.buttonText = 'Добавить рецепт';
		addRecipeCtrl.newRecipeOpen = NewRecipeOpen;

		addRecipeCtrl.paramRecipe = {
			name:'',
			price: 0,
			time: 0,
			images: {
				imageBig: 'image/food.jpeg'
			}
		}

		addRecipeCtrl.addRecipe = addNewRecipe;

		function addNewRecipe() {
			request.addRecipe(addRecipeCtrl.paramRecipe.name, addRecipeCtrl.paramRecipe.price,addRecipeCtrl.paramRecipe.time,addRecipeCtrl.paramRecipe.images.imageBig)
				.then(function(){
					ngDialog.close();
					addRecipeCtrl.paramRecipe.name = '';
					addRecipeCtrl.paramRecipe.price='';
					addRecipeCtrl.paramRecipe.time = '';
				});
		}

		function NewRecipeOpen() {
			ngDialog.open({ 
						template: 'app/common/controllers/newRecipe.html', 
						className: 'ngdialog-theme-plain',
						controller:  'addRecipeController',
						controllerAs: 'addRecipeCtrl'
					});
		}

	}

})();
