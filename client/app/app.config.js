(function () {
    function config($stateProvider, $urlRouterProvider, $locationProvider) {


        $locationProvider.html5Mode({enabled:true,requireBase:false});

        var homeObj = {
            name: "home",
            url: "/home",
            templateUrl: "app/home/home.tpl.html"
        };
        $stateProvider.state("home", homeObj);

        var registerObj = {
            name: "register",
            url: "/register",
            templateUrl: "app/register/register.tpl.html"
        };
        $stateProvider.state("register", registerObj);

        var productObj = {
            name: "products",
            url: "/products",
            templateUrl: "app/product/product.tpl.html",
            controller:"productController as pc"
        };
        $stateProvider.state("products", productObj);

        $urlRouterProvider.otherwise("/home");
        //$locationProvider.html5Mode(true);

    };
    angular.module("fashionbay")
        .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", config]);
})();