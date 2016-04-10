(function() {
	'use strict';

	angular.module('kitchenApp.filters', [])
		.filter('filterRecipes', FilterRecipes);

	function FilterRecipes() {
		return function (items, searchs) {
	  	var filtered = [];
	  	for (var i = 0; i < items.length; i++) {
	    	var item = items[i];
				if(searchs){
					var match = function (item1, val) {
						val = val.toLowerCase();
						for (var p in item1) {
							if(typeof(item1[p]) != 'object') {
								if(item1[p].toString().toLowerCase().indexOf(val) >= 0){
									return true;
								}
							}
						}
					}
					var matched = true;
					searchs.split(' ').forEach(function(token) {
			       matched = matched && match(item, token);
			    });
					if (matched) {
						filtered.push(item);
					}
				} else {
					filtered.push(item);
				}
	  	}
	  	return filtered;
		};
	}

})();