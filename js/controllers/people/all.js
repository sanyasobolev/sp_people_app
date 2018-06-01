"use strict";
(function () {
	angular.module("peopleApp")
		.controller("allPeopleCtrl", ["$scope", "$rootScope", "peopleService", "startsWithFilter",
		function ($scope, $rootScope, peopleService, startsWithFilter) {
			peopleService.getAll()
				.then(function (response) {
                $scope.people = response.data.d.results;
			});
			$scope.removePerson = function(person){
				peopleService.remove(person.ID)
				.then(function(response){
					var personIndex = $scope.people.indexOf(person); //define index of person in array
					$scope.people.splice(personIndex,1); //remove 1 item with index of personIndex
				});
			};
		}]);


	
})();