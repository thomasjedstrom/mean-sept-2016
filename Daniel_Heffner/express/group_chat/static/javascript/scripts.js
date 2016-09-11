$(function(){

	var socket = io.connect();
	var user = prompt('Please enter your name:');
	socket.emit('new_user', user);
	$('#message').focus();

	function scroll(){
		var height = 0;
		$('#board p').each(function(i, value){
			height += parseInt($(this).height());
		});
		height += '';
		$('#board').scrollTop(height);
	}

	socket.on('setup', function(data){
		console.log(data);
		var htmlstr = '';
		for (var i = 0; i < data.history.length; i++){
			htmlstr += '<p><span>'+data.history[i].name+'</span>: '+data.history[i].msg+'</p>';
		}
		$('#board').html(function(){
			return htmlstr;
		})
		scroll();
	})

	$('form').submit(function(){
		var message = $('#message').val();
		console.log(message);
		if (message == ''){
			$('#message').focus();
			return false;
		}
		$('#message').val('');
		socket.emit('new_message', { 'msg': message })
		$('#message').focus();
		return false;
	})

	socket.on('update', function(data){
		$('#board').append(function(){
			return '<p><span>'+data.name+'</span>: '+data.msg+'</p>';
		})
		scroll();
	})

})