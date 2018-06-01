"use strict";
(function () {
	angular.module("peopleApp")
	.filter('startsWith', function() {
	    return function(input, text){
	    	if(text&&input)
		        return input.filter(function(item){
		        	var lowerStr = (item.last_name + "").toLowerCase(); //убираем заглавные буквы во всей выборке
		            return lowerStr.indexOf(text.toLowerCase()) === 0; //отдаем в фильтр только совпадающие 
		        });
	    };
	});
})();