var game = false;
var divx = null;
var divy = null;  
var gamer = null;
var gamerwidth = null;
var gamerheight = null; 
var x = null;
var y = null;
var timer = null;
var diff = 10;
var randomtimer = null;
var boardwidth = null;
var boardheight = null;
var init = function(event){
	if(event.which === 32){
		game = !game;
		if(game){
			document.addEventListener("keydown",update);
			var board = document.getElementById("gamefield").getBoundingClientRect();
			boardheight = board.height;
			boardwidth = board.width;
			gamer = document.getElementById("gamer");
			x = gamer.getBoundingClientRect().left - board.left;
			y = gamer.getBoundingClientRect().top - board.top;
			//console.log(x,y);
			gamerwidth = gamer.getBoundingClientRect().width;
			gamerheight = gamer.getBoundingClientRect().height;
			randomtimer = setInterval(shift,100);
			timer= setInterval(render,100);
		}else{
			clearInterval(timer);
			clearInterval(randomtimer);
		}
		//console.log(game);
	}
};
var shift = function(){
	//console.log(x,y,randx,randy);
	if(x<=0||x>=boardwidth-gamerwidth||y<=0||y>=boardheight-gamerheight){
		//console.log(x,y,randx,randy,boardwidth,boardheight);
		game = false;
		clearInterval(timer);
		clearInterval(randomtimer);
		var begin = window.confirm("game over, wannna restart?");
		if(begin){
			location.reload();		
		}
	}
	var randx = (Math.floor(3 * Math.random()) -1)*diff; 
	var randy = (Math.floor(3 * Math.random()) -1)*diff; 
	x = (x + randx);
	y = (y + randy);
};
var update = function(event){
	if(event.which === 37){
		x = x - diff;
	}else if(event.which === 38){
		y = y - diff;
	}else if(event.which === 39){
		x = x + diff;
	}else if (event.which === 40){
		y = y + diff;
	}
};
var render = function(){
	gamer.style.left = x+"px";
	gamer.style.top = y+"px";
	// console.log("render");
};
document.addEventListener("keydown",init);
//document.addEventListener("keydown",update);
