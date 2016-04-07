/**
* kitchenApp Modul
*
* Description
*/

angular.module('kitchenApp', ['ngAnimate','kitchenApp.routing'])
	.controller('recipesController',function(){
		var recipeCtrl = this;

		recipeCtrl.recipes = [
			{ 
				name: 'Рецепт 1',
				price: 1000,
				images: {
					imageBig: 'app/image/food.jpeg'
				}
			},
			{ 
				name: 'Рецепт 2',
				price: 1200,
				images: {
					imageBig: 'app/image/food1.jpg'
				}
			},
			{ 
				name: 'Рецепт 3',
				price: 500,
				images: {
					imageBig: 'app/image/food2.jpg'
				}
			},
			{ 
				name: 'Рецепт 4',
				price: 1000,
				images: {
					imageBig: 'app/image/food3.jpg'
				}
			},
			{ 
				name: 'Рецепт 5',
				price: 1200,
				images: {
					imageBig: 'app/image/food4.jpg'
				}
			},
			{ 
				name: 'Рецепт 6',
				price: 500,
				images: {
					imageBig: 'app/image/food5.jpg'
				}
			},
			{ 
				name: 'Рецепт 7',
				price: 1200,
				images: {
					imageBig: 'app/image/food6.jpg'
				}
			},
			{ 
				name: 'Рецепт 8',
				price: 500,
				images: {
					imageBig: 'app/image/food7.jpg'
				}
			},
			{ 
				name: 'Рецепт 9',
				price: 1200,
				images: {
					imageBig: 'app/image/food8.jpg'
				}
			},
			{ 
				name: 'Рецепт 10',
				price: 500,
				images: {
					imageBig: 'app/image/food9.jpg'
				}
			}
		]
	})
	.controller('pathController', function($location){
		var pathCtrl = this;
		pathCtrl.pages=[
			{
				name:'Моя кухня',
				class:'kitchen',
				href:'/'
			},
			{
				name:'Позавтракать',
				class:'breakfast',
				href:'/breakfast'
			},
			{
				name:'Отобедать',
				class:'lunch',
				href:'/lunch'
			},
			{
				name:'Поужинать',
				class:'dinner',
				href:'/dinner'
			},
			{
				name:'Отпразновать',
				class:'celebration',
				href:'/celebration'
			},
			{
				name:'Помажорить',
				class:'major',
				href:'/major'
			},
		];

		pathCtrl.isActive = function (viewLocation) { 
        	return viewLocation === $location.path();
    	};
	});