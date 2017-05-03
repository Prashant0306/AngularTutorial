(function(){
    function productCtrl(productSvc){
        var vm=this;
        productSvc.getProductsAsync()
        .then(function(response){
            vm.products=response.data.products;
        })
        .catch(function(errorResponse){
            console.log(errorResponse);
        })
        .finally(function() {
			console.log("getProductsAsync() finally block.");
		});
    };

    angular.module("product")
    .controller("productController",["productSvc",productCtrl]);
})();