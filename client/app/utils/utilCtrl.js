(function(){
    function utilCtrl(urlParam)
    {
        var vm=this;
        vm.headerTemplate="app/utils/navbar.tpl.html";
        vm.ActiveTab=1;
        vm.tabSelected=function(tab)
        {
            vm.ActiveTab=tab;
        };
    };

    angular.module("utils")
    .controller("utilController",[utilCtrl]);

})();