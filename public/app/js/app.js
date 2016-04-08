/**
* kitchenApp Modul
*
* Description
*/

angular.module('kitchenApp', ['ngAnimate','kitchenApp.routing','kitchenApp.filters'])
	.controller('recipesController',function(){
		var recipeCtrl = this;

		recipeCtrl.recipes = [
			{
				name: 'Рулька запеченная в духовке с розмарином',
				price: 1000,
				time: 120,
				images: {
					imageBig: 'app/image/food.jpeg'
				}
			},
			{
				name: 'Цыпленок в табаках',
				price: 1200,
				time: 120,
				images: {
					imageBig: 'app/image/food1.jpg'
				}
			},
			{
				name: 'Семга с морской капустой',
				price: 500,
				time: 120,
				images: {
					imageBig: 'app/image/food2.jpg'
				}
			},
			{
				name: 'Шведский обед',
				price: 1000,
				time: 120,
				images: {
					imageBig: 'app/image/food3.jpg'
				}
			},
			{
				name: 'Охеренные бутеры',
				price: 1200,
				time: 120,
				images: {
					imageBig: 'app/image/food4.jpg'
				}
			},
			{
				name: 'Рецепт 6',
				price: 500,
				time: 120,
				images: {
					imageBig: 'app/image/food5.jpg'
				}
			},
			{
				name: 'Рецепт 7',
				price: 1200,
				time: 120,
				images: {
					imageBig: 'app/image/food6.jpg'
				}
			},
			{
				name: 'Рецепт 8',
				price: 500,
				time: 120,
				images: {
					imageBig: 'app/image/food7.jpg'
				}
			},
			{
				name: 'Рецепт 9',
				price: 1200,
				time: 120,
				images: {
					imageBig: 'app/image/food8.jpg'
				}
			},
			{
				name: 'Рецепт 10',
				price: 500,
				time: 120,
				images: {
					imageBig: 'app/image/food9.jpg'
				}
			}
		]
	});
