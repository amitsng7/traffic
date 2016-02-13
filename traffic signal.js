var horizontal_Velocity;
var vertical_Velocity;
var x_co = 0;
var y_co = 0;
var signal = "yellow";
var cir_circle;

function green_circle(){
	document.getElementById('circle').style.backgroundColor = "green";
	cir_circle = "rgb(255, 255, 0)";
	console.log(cir_circle);
	setTimeout('yellow_circle()', 10000);
}

function yellow_circle(){
	document.getElementById('circle').style.backgroundColor = "yellow";
	cir_circle = "rgb(0, 128, 0)";
	console.log(cir_circle);
	setTimeout('red_circle()', 5000);
}

function red_circle(){
	document.getElementById('circle').style.backgroundColor = "red";
	cir_circle = "rgb(255, 0, 0)";
	console.log(cir_circle);
	docReady();
}
function draw(x,y){
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	ctx.save();
	ctx.clearRect(0,0,550,400);
	ctx.fillStyle = "rgba(0,200,0, 1)";
	ctx.fillRect (x,y,50,50);
	ctx.restore();
}

function leftArrowPressed(x,y) {
	if (horizontal_Velocity == -1 && vertical_Velocity == ' '){
		if(cir_circle == "rgb(255, 255, 0)" && x_co > 0 && x_co <= 500){
			x -= 10;
			x_co = x;
			y_co = y; 
			draw(x,y);
			console.log(x_co, y_co);
			return(x_co,y_co);
		}
		else if(cir_circle == "rgb(255, 0, 0)"){
			return;
		}
		else if(x_co > 0 && x_co <= 500){
			x -= 5 ;
			x_co = x;
			y_co = y; 
			draw(x,y);
			console.log(x_co, y_co);
			return(x_co,y_co);
		}
	}
}
function rightArrowPressed(x,y) {
	if (horizontal_Velocity == 1 && vertical_Velocity == ' '){
		if(cir_circle == "rgb(255, 255, 0)" && x_co >= 0 && x_co < 500){
			x += 10;
			x_co = x;
			y_co = y; 
			draw(x,y);
			console.log(x_co, y_co);
			return(x_co,y_co);
		}
		else if(cir_circle == "rgb(255, 0, 0)"){
			return;
		}
		else if (x_co >= 0 && x_co < 500){
			x += 5 ;
			x_co = x;
			y_co = y; 
			draw(x,y);
			console.log(x_co, y_co);
			return(x_co,y_co);
		}
	}
}

function upArrowPressed(x,y) {
	if (horizontal_Velocity == ' ' && vertical_Velocity == -1){
		console.log("up");
		if(cir_circle == "rgb(255, 255, 0)" && y_co > 0 && y_co <= 350){
			y -= 10;
			x_co = x;
			y_co = y; 
			draw(x,y);
			console.log(x_co, y_co);
			return(x_co,y_co);
		}
			else if(cir_circle == "rgb(255, 0, 0)"){
			return;
		}
		else if(y_co > 0 && y_co <= 350){
			y -= 5;
			x_co = x;
			y_co = y; 
			draw(x,y);
			console.log(x_co, y_co);
			return(x_co,y_co);
		}
	}
}

function downArrowPressed(x,y) {
	if (horizontal_Velocity == ' ' && vertical_Velocity == 1){
		if(cir_circle == "rgb(255, 255, 0)" && y_co >= 0 && y_co < 350){
			y += 10;
			x_co = x;
			y_co = y; 
			draw(x,y);
			console.log(x_co, y_co);
			return(x_co,y_co);
		}
		else if(cir_circle == "rgb(255, 0, 0)"){
			return;
		}
		else if (y_co >= 0 && y_co < 350){
			y += 5;
			x_co = x;
			y_co = y; 
			draw(x,y);
			console.log(x_co, y_co);
			return(x_co,y_co);
		}
	}
}

function moveSelection(evt) {
	console.log("key event")
	if(cir_circle == "rgb(0, 128, 0)" || cir_circle == "rgb(255, 255, 0)"){
		switch (evt.keyCode) {
		case 37:
			vertical_Velocity = ' ';
			horizontal_Velocity = -1;
			leftArrowPressed(x_co,y_co);
			break;
		case 39:
			vertical_Velocity = ' ';
			horizontal_Velocity = 1;
			rightArrowPressed(x_co,y_co);
			break;
		case 38:
			vertical_Velocity = -1;
			horizontal_Velocity = ' ';
			upArrowPressed(x_co,y_co);
			break;
		case 40:
			vertical_Velocity = 1;
			horizontal_Velocity = ' ';
			console.log(x_co);
			console.log(y_co);
			downArrowPressed(x_co,y_co);
			break;
		}
	}
	else{
		alert("red signal");
		return;
	}
}


function docReady(){
	draw(x_co,y_co);
	setTimeout('green_circle()', 5000);
	document.addEventListener('keydown', moveSelection);
}
