let posX, posY;
let diam;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	stroke(255);
	
}

function draw() {
	background(0);
	posX = 0;
	posY = 0;
	diam = 200;
	push();
	translate(mouseX,mouseY);
	strokeWeight(2);
	circle(posX-diam/4, posY-diam/4, diam/6);
	circle(posX+diam/4, posY-diam/4, diam/6);
	line(posX-diam/4, posY+diam/4-random(diam/10),posX+diam/4, posY+diam/4);
	strokeWeight(4);
	circle(posX, posY, diam);
	
	
	pop();
	
}