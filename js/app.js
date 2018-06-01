"use strict";
(function () {
	angular.module("peopleApp", ["ngRoute"])
		.config(["$routeProvider", function ($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl: "/it/SiteAssets/people_app/templates/people/all.html",
			controller: "allPeopleCtrl"
		})
		.when("/addPerson", {
			templateUrl: "/it/SiteAssets/people_app/templates/people/add.html",
			controller: "addPersonCtrl"
		})
		.when("/editPerson/:personId", {
			templateUrl: "/it/SiteAssets/people_app/templates/people/edit.html",
			controller: "editPersonCtrl"
		})
		.when("/seeProfile/:personId", {
			templateUrl: "/it/SiteAssets/people_app/templates/people/profile.html",
			controller: "seeProfileCtrl"
		});
	}]);
})();