$(function(){
	var current = $("#blueButton").css("background-color");
	$("#blueButton").click(function(){
		if ($(this).css("background-color") == "rgb(0, 0, 255)"){
			$(this).css("background-color", "red");
		} else {
			$(this).css("background-color", "blue");
		}
	});
	$("#blueButton").hover(function(){
		current = $("#blueButton").css("background-color");
		$(this).css("background-color", "green");
	}, function(){
		$(this).css("background-color", current);
	})
})