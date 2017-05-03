(function () {
    //product service
    function productSvc($http, $q) {
        // functions
        this.getProductsAsync = function () {
            var dfd = $q.defer();
            var products = localStorage.getItem("products");
            if (products)
                dfd.resolve(JSON.parse(products));
            else {
                $http.get("api/product.json")
                    .then(function (response) {
                        var result = dataMapper(response);
                        localStorage.setItem("products", JSON.stringify(result));
                        dfd.resolve(result);
                    })
                    .catch(function (errorResponse) {
                        dfd.reject(errorResponse);
                    })
            }
            return dfd.promise;
        }

        function dataMapper(response) {
            var result = {
                data: {
                    products: []
                }
            };
            angular.forEach(response.data.products, function (item, index) {
                var product = {
                    index: index + 1,
                    model: item.Model,
                    price: item.Price,
                    description: item.Description
                };
                result.data.products.push(product);
            });
            return result;
        };

    };
    //product module
    angular.module("product")
        .service("productSvc", ["$http", "$q", productSvc]);
})();