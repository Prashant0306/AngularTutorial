(function(){

    function utilityService($http,$q){
        this.validationPatterns = {
            email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        };
        this.getCountries = function() {
            return [{ name: "India", code: "IN" },
                { name: "United States", code: "USA" }
            ];
        };

        this.getCountryAsync=function()
        {
            var dfd=$q.defer();
            var countries=localStorage.getItem("countries");
            if(countries){
                dfd.resolve(JSON.parse(countries));
            }
            else
            {
                $http.get("api/country.json")
                .then(function(response){
                    localStorage.setItem("countries", JSON.stringify(response));
                    dfd.resolve(response);
                })
                .catch(function(errorResponse){
                    dfd.reject(errorResponse);
                });
            }
            return dfd.promise;
        };
    };

    //create service
    angular.module("utils")
    .service("utilityService",["$http","$q",utilityService])

})();