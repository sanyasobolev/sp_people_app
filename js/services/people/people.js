"use strict";
(function(){
	angular.module("peopleApp")
	.service("peopleService",["baseSvc",function(baseService){ 
		var listEndPoint = '/_api/web/lists';
		
		var getAll = function(){
			var query = listEndPoint + "/GetByTitle('People')/Items?$select=ID,first_name,last_name,mobile,ext_tel,position,email&$top=1000";
			return baseService.getRequest(query);
		};
		
		var addNew = function(person){
			var data = {
				__metadata: { 'type': 'SP.Data.PeopleListItem' },
				first_name: person.first_name,
				last_name: person.last_name,
				mobile: person.mobile,
				ext_tel: person.ext_tel,
				position: person.position,
				email: person.email
			};
			var url = listEndPoint + "/GetByTitle('People')/Items";
			return baseService.postRequest(data,url);
		};
		var getById = function(personId){
			var query = listEndPoint + "/GetByTitle('People')/GetItemById("+personId+")?$select=ID,first_name,last_name,mobile,ext_tel,position,email";
			return baseService.getRequest(query);
		};
		var update = function (person){
			var data = {
				__metadata: { 'type': person.item_type },
				first_name: person.first_name,
				last_name: person.last_name,
				mobile: person.mobile,
				ext_tel: person.ext_tel,
				position: person.position,
				email: person.email
			};
			var url = listEndPoint + "/GetByTitle('People')/GetItemById("+person.personId+")";
			return baseService.updateRequest(data,url);
		};
		var remove = function(personId){
			var url = listEndPoint + "/GetByTitle('People')/GetItemById("+personId+")";
			return baseService.deleteRequest(url);
		};
		
		return{
			getAll:getAll,
			addNew:addNew,
			getById:getById,
			update:update,
			remove:remove
		};
	}]);
})();