(function(){
	angular
    	.module('kitchen')
    	.controller('mykitchenController', MykitchenController);

    MykitchenController.$inject = ['request'];
  	function MykitchenController(request) {
		var mykitchenCtrl = this;

		mykitchenCtrl.recipes = [];

		activate();

		function activate() {
        	return getRecipes().then(function() {
            	console.log('Activated Avengers View');
        	});
    	}

    	function getRecipes() {
        	return request.getRecipes()
            .then(function(data) {
                mykitchenCtrl.recipes = data;
                console.log(data);
                return mykitchenCtrl.recipes;
            });
    	}

	}

})();
