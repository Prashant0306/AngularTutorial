(function () {
	"use strict";

	function registerCtrl(utilitySvc) {
		var vm = this;
		vm.pageTitle = "Register";
		vm.user={};
		vm.isSubmitted=false;
		vm.registerUser=function(){
			vm.isSubmitted=true;
			console.log(vm.user);
		};
		
		utilitySvc.getCountryAsync()
		.then(function(response){
			//console.log(response);
			vm.countries=response.data.countries;
		})
		.catch(function(errorResponse) {
                console.log(errorResponse);
		})
		.finally(function() {
			console.log("GetCountryAsync() finally block.");
		});
		vm.patterns=utilitySvc.validationPatterns;

	}
	//register module
	angular.module("register")
		.controller("registerCtrl", ["utilityService",registerCtrl]);
})();
