// module aliases
var Engine = Matter.Engine,
	// Render = Matter.Render,
	MouseConstraint = Matter.MouseConstraint,
	Mouse = Matter.Mouse,
	World = Matter.World,
	Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;
var wallL;
var wallR;

 
function setup() {

	var wdheight = window.innerHeight;
	var wdwidth = window.innerWidth;
	var hex = 200;

	createCanvas(wdwidth, wdheight);

	engine = Engine.create();
	world  = engine.world;
	Engine.run(engine);

	ground = new Boundary(wdwidth/2, wdheight + hex/2, wdwidth, hex);
	wallL = new Boundary(-hex/2, wdheight/2, hex, wdheight);
	wallR = new Boundary(wdwidth + hex/2, wdheight/2, hex, wdheight);


	World.add(world, ground);
	World.add(world, wallL);
	World.add(world, wallR);
	World.add(world, illustrator);


}


function mouseDragged(){ 
	// boxes.push(new Box(mouseX, mouseY, random(10,40), random(10,40)));
	boxes.push(new Box(mouseX, mouseY, random(10,40)));
}


function draw() {
	background(51);

	var wdheight = window.innerHeight;
	var wdwidth = window.innerWidth;
	var hex = 100;

	// Engine.update(engine);
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].show();
	};


	ground.show();
	wallL.show();
	wallR.show();
}
