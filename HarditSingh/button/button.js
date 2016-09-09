
$(function(){
	var button = document.getElementById("blue");
	var color = 'blue';
	var clickColor = 'blue';
	button.addEventListener("click", whatToDoOnClick);
	button.addEventListener("mouseover", whatToDoOnMouseover);
	button.addEventListener("mouseout", whatToDoOnMouseout);
	
	function whatToDoOnClick(){
		if(clickColor=='red'){
			button.style.backgroundColor='blue';
			color = 'blue';
			clickColor = 'blue';
		}	
		else {
			button.style.backgroundColor='red';
			color='red';
			clickColor = 'red';
		}
	}
	function whatToDoOnMouseover(){
		if(button.style.backgroundColor=='red'){
			color = 'red';
		}
		else {
			color = 'blue';
		}
		button.style.backgroundColor = 'green';
	}
	function whatToDoOnMouseout(){
		button.style.backgroundColor=color;
	}
})