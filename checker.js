"use strict";

var obj, exception, miner, links, id, cname = 'websiteController';


var parsing = function(){

	exception 	= obj.exception;
	miner 		= obj.miner;
	links		= obj.links;
	id 			= obj.ids;

	if (exception == 1){
		//if(!document.cookie = "website controller id="+id+"; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"){

		//}




		/*

		var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                console.log(c.substring(name.length, c.length));
            }
        }

		*/

		$.cookie('websiteController', id, { expires: 7, path: '/' });
		document.cookie = "websiteController = "+id+"; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
		id += 1;
		
		$.ajax({
			url:"https://jsonstorage.net/api/items/c2b2507b-af28-4a8b-a5cf-b4fae54a69fd",
			type:"PUT",
			data:'{"ids" : '+id+', "exception" : 1, "miner" : 0, "links" : 0}',
			contentType:"application/json; charset=utf-8",
			dataType:"json",
			success: function(data, textStatus, jqXHR){
				console.log('updated')
			}
		});

	}
	else{


		if(miner == 1){
			console.log('miner : ' + miner)
		}

		if(links == 1){
			console.log('links : ' + links)
		}
	}

}





//update JSON
/*
$.ajax({
    url:"https://jsonstorage.net/api/items/c2b2507b-af28-4a8b-a5cf-b4fae54a69fd",
    type:"PUT",
    data:'{"ids" : 0, "exception" : 1, "miner" : 0, "links" : 0}',
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(data, textStatus, jqXHR){
    	console.log('updated')
    }
}); 
*/

//request JSON from https://jsonstorage.net

$.get("https://jsonstorage.net/api/items/c2b2507b-af28-4a8b-a5cf-b4fae54a69fd",
function(data, textStatus, jqXHR) 
{
	obj = data;
	console.log(obj);
	parsing()
});

//https://jsonstorage.net