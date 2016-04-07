'use strict';

angular.module('kitchenApp.routing')
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