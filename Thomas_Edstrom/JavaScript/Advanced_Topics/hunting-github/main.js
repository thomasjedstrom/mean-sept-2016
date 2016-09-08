// VERSION 1	-	CALLBACK
// $(function(){

// 	$('button').click(function(){
// 		$.get("https://api.github.com/users/thomasjedstrom", displayName)	
// 	})

// 	function displayName(data) {
// 		var myName = data.name
// 		$('#result').append(myName)
// 	}
// })


// VERSION 2	-	PROMISE
$(function(){

	$('button').click(function(){
		loadData("https://api.github.com/users/thomasjedstrom")
	})

	function getData(endpoint){
		var deferred = new Promise(function(resolve, reject){
			$.get(endpoint)
			.then((data) => {
				resolve(data)
			})
		})
		return deferred
	}


	var loadData = function(endpoint){

		getData(endpoint)
		.then((data) => {
			var myName = data.name
			$('#result').append(myName)
		})
		.catch((error) => {

		})
	}

})
