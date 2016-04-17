(function(){
	angular
		.module('kitchen')
		.controller('breakfastController', BreakfastController);

	BreakfastController.$inject = ['$filter', '$scope'];
	function BreakfastController($filter, $scope) {
		var breakfastCtrl = this;

		breakfastCtrl.recipes = [
			{
				name: 'Рулька запеченная в духовке с розмарином',
				price: 1000,
				time: 120,
				images: {
					imageBig: 'image/food.jpeg'
				}
			},
			{
				name: 'Цыпленок в табаках',
				price: 1200,
				time: 120,
				images: {
					imageBig: 'image/food1.jpg'
				}
			},
			{
				name: 'Семга с морской капустой',
				price: 500,
				time: 120,
				images: {
					imageBig: 'image/food2.jpg'
				}
			},
			{
				name: 'Шведский обед',
				price: 1000,
				time: 120,
				images: {
					imageBig: 'image/food3.jpg'
				}
			},
			{
				name: 'Охеренные бутеры',
				price: 1200,
				time: 120,
				images: {
					imageBig: 'image/food4.jpg'
				}
			},
			{
				name: 'Рецепт 6',
				price: 500,
				time: 120,
				images: {
					imageBig: 'image/food5.jpg'
				}
			},
			{
				name: 'Рецепт 7',
				price: 1200,
				time: 120,
				images: {
					imageBig: 'image/food6.jpg'
				}
			},
			{
				name: 'Рецепт 8',
				price: 500,
				time: 120,
				images: {
					imageBig: 'image/food7.jpg'
				}
			},
			{
				name: 'Рецепт 9',
				price: 1200,
				time: 120,
				images: {
					imageBig: 'image/food8.jpg'
				}
			},
			{
				name: 'Рецепт 10',
				price: 500,
				time: 120,
				images: {
					imageBig: 'image/food9.jpg'
				}
			}
		];

		$scope.$watch('search', function(val) {
			breakfastCtrl.filteredRecipes = $filter('filterRecipes')(breakfastCtrl.recipes, val);
		});
	}

})();
