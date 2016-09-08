$(document).ready(function(){

	function Button(button_id){
		this.id = button_id;
		this.bg_color = 'darkblue';
		$(this.id).data('obj', this);
	}
	Button.prototype.onClick = function(){
		if (this.bg_color == 'darkblue'){
			this.bg_color = 'darkred';
			$(this.id).css('background-color', this.bg_color);	
		} else {
			this.bg_color = 'darkblue';
			$(this.id).css('background-color', this.bg_color);
		}
	}
	Button.prototype.hoverIn = function(){
		$(this.id).css('background-color', 'darkgreen');
	}
	Button.prototype.hoverOut = function(){
		$(this.id).css('background-color', this.bg_color);
	}
	var first = new Button($('#button').attr('id'));
	
	$('button').on('mouseenter', function(){
		$(this).data('obj').hoverIn();
	});
	$('button').on('mouseleave', function(){
		$(this).data('obj').hoverOut();
	});
	$('button').on('click', function(){
		$(this).data('obj').onClick();
	});

	// $(document).keypress(function(e){
	// 	if(e.which == 13) {
	// 		var id = 'a' + Math.floor(Math.random()*1000000);
	// 		$('body').append(function(){
	// 			return '<button id="'+id+'">I am a button, see what I do</button>';
	// 		})
	// 		console.log(id);
	// 		console.log($(id));
	// 		console.log($(id).attr('id'));
	// 		var newButton = new Button(id);
	// 		console.log(newButton);
	// 		$(id).data('obj', newButton);
	// 	}
	// })
})
