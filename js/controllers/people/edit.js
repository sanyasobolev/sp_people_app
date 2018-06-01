"use strict";
(function () {
	angular.module("peopleApp")
		.controller("editPersonCtrl", ["$scope", "peopleService", "$routeParams","$location", 
			function ($scope, peopleService, $routeParams,$location) {
		peopleService.getById($routeParams.personId)
			.then(function (response) {
			$scope.person = {
				personId : response.data.d.ID,
				item_type: response.data.d.__metadata.type,				
				first_name: response.data.d.first_name,
				last_name: response.data.d.last_name,
				mobile: response.data.d.mobile,
				ext_tel: response.data.d.ext_tel,
				position: response.data.d.position,
				email: response.data.d.email
			};
			
			$scope.editPerson = function(person){
				peopleService.update(person)
				.then(function(response){
					$location.path("/");
				});
			};
			
			$scope.cancel = function () {
				$location.path("/");
			};
		});
	}]);
})();