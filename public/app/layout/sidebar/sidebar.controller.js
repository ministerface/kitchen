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
				sref:'mykitchen',
				href:'/'
			},
			{
				name:'Позавтракать',
				class:'breakfast',
				sref:'breakfast',
				href:'/breakfast'
			},
			{
				name:'Отобедать',
				class:'lunch',
				sref:'lunch',
				href:'/lunch'
			},
			{
				name:'Поужинать',
				class:'dinner',
				sref:'dinner',
				href:'/dinner'
			},
			{
				name:'Отпразновать',
				class:'celebration',
				sref:'celebration',
				href:'/celebration'
			},
			{
				name:'Помажорить',
				class:'major',
				sref:'major',
				href:'/major'
			},
		];

		sidebarCtrl.isActive = function (viewLocation) {
	    return viewLocation === $location.path();
	  };
	}

})();