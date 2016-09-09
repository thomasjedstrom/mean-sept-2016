$(function(){

	var socket = io.connect();

	$('form').submit(function(){
		var formData = $(this).serializeArray();
		socket.emit('posting_form', formData);
		return false;
	})

	socket.on('updated_message', function(data){
		$('#response').text(function(){
			return data.response;
		})
	})

	socket.on('random_number', function(data){
		$('#random').text(function(){
			return 'Your lucky number emitted by the server is '+data.response;
		})
	})


})
