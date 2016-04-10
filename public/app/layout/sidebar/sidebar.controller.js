(function(){
	'use strict';

	angular
		.module('kitchen')
		.controller('sidebarController', SidebarController);

	SidebarController.$inject = ['$location'];

	function SidebarController($location) {
		var sidebarCtrl = this;
		sidebarCtrl.pages = [
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

		sidebarCtrl.isActive = function (viewLocation) {
	    return viewLocation === $location.path();
	  };
	}

})();