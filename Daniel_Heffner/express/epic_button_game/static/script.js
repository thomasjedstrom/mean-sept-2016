$(function(){

	var socket = io.connect();

	$('#epic').click(function(){
		socket.emit('epic');
	})

	$('#reset').click(function(){
		socket.emit('reset');
	})

	socket.on('update', function(data){
		$('#epicNum').text(function(){
			return data.number;
		})
	})
})
