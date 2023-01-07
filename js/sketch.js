var Engine = Matter.Engine,
	Render = Matter.Render,
	Runner = Matter.Runner,
	Events = Matter.Events,
	MouseConstraint = Matter.MouseConstraint,
	Mouse = Matter.Mouse,
	World = Matter.World,
	Bodies = Matter.Bodies,
	Body = Matter.Body;
	// Composite = Matter.Composite;

// create an engine
var engine = Engine.create(),
	world = engine.world;

var wdwidth = window.innerWidth;
var wdheight = window.innerHeight;
var hex = 200;

// var scroll = $(window).scrollTop();
// var width = $(window).innerWidth();
// var height = $(window).innerHeight();
// var up = scroll / height;

// create a renderer
var render = Render.create({
		element: document.getElementById('physicscreen'),
		engine: engine,
		options: {
			width: wdwidth,
			height: wdheight,
			pixelRatio: 3,
			background: 'transparent',
			wireframes: false,
		}
	}
);

engine.world.gravity.x = 0;
engine.world.gravity.y = .5;


var ratio = 1/2;
var ratiosvg;
var runner = Runner.create();
    Runner.run(runner, engine);

var mouse = Mouse.create(render.canvas),
	mouseConstraint = MouseConstraint.create(engine, {
		mouse: mouse,
		constraint: {
			stiffness: 0.2,
			render: {
				visible: false,
			}
		}
	});

World.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// Allow page scrolling in matter.js window
mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

// Detect clicks vs. drags
let click = false;

document.addEventListener('mousedown', () => click = true);
document.addEventListener('mousemove', () => click = false);
document.addEventListener('mouseup', () => console.log(click ? 'click' : 'drag'));




// Create a On-Mouseup Event-Handler
Events.on(mouseConstraint, 'mouseup', function(event) {
	var mouseConstraint = event.source;
	var bodies = engine.world.bodies;
	if (!mouseConstraint.bodyB) {
		for (i = 0; i < bodies.length; i++) { 
			var body = bodies[i];
			// Check if clicked or dragged
			if (click === true) {
				if (Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)) {
					var bodyUrl = body.url;
					console.log("Body.Url >> " + bodyUrl);
					// Hyperlinking feature
					if (bodyUrl != undefined) {
						//window.location.href = bodyUrl;
						window.open(bodyUrl, '_blank');
						console.log("Hyperlink was opened");
					}
				} else {
					pressed();
					break;
				}
			}
		}
	}
});


var pressed = function mousePressed() {
	if (flowersmore.length < 50) {
		flowersmore.push(new Flowersmore(random(10, wdwidth - 10), -135, 135*random(0.2, 1.2)/2));
	}
}

function setup() {
	wdwidth = window.innerWidth;
	wdheight = window.innerHeight;
	hex = 200;

	createCanvas(0,0);

	if (wdwidth > wdheight) {
		ratiosvg = ratio*wdwidth/1800;
	} else {
		ratiosvg = ratio*wdheight/1000;
	}

	wallL = new Boundary(-hex/2, wdheight/2, hex, wdheight);
	wallR = new Boundary(wdwidth + hex/2, wdheight/2, hex, wdheight);
	// circle =  new Circle(wdwidth/2, wdheight/2 - .6*225, 225);
	// groundmain = new Boundary(wdwidth/2, wdheight + hex/2, wdwidth, hex);


	// domieSocksmain =  new DomieSocks	(wdwidth/10, hex/2, 1008*ratiosvg, 261*ratiosvg);
	// diarymain =  new Diary				(wdwidth/3, hex/3, 529*ratiosvg, 261*ratiosvg);
	// proemain =  new ProE				(wdwidth/2.5, wdheight/1.5, 938*ratiosvg, 260*ratiosvg);
	// olibannermain =  new OliBanner		(wdwidth/1.5, wdheight/1.7, 1100*ratiosvg, 261*ratiosvg);
	// savourmain = new Savour			(wdwidth/3, wdheight/1.7, 623*ratiosvg, 261*ratiosvg);
	// cocacolamain = new CocaCola		(wdwidth - wdwidth/10, - hex/2, 808*ratiosvg, 261*ratiosvg);
	// flowers1main = new Flowers1		(wdwidth/10, hex, 135*ratiosvg);
	// flowers2main = new Flowers2		(50 + wdwidth - wdwidth/10, hex/2, 135*ratiosvg);
}
var flowersmore = [];
var circles = [];
var ground = [];
var domieSocks = [];
var diary = [];
var proe = [];
var olibanner = [];
var savour = [];
var cocacola = [];
var flowers1 = [];
var flowers2 = [];


function mouseWheel(){
	for ( var i = 0; i < domieSocks.length; i++){
		domieSocks[i].applyForce();
	};
	for ( var i = 0; i < savour.length; i++){
		savour[i].applyForce();
	};
	for ( var i = 0; i < proe.length; i++){
		proe[i].applyForce();
	};
}


function draw() {

	var scroll = $(window).scrollTop();
	var width = $(window).innerWidth();
	var height = $(window).innerHeight();
	var up = scroll / height;

	var loopSvg = function() {
		if (domieSocks.length == 0) {
			domieSocks.push(new DomieSocks( random(wdwidth*.1, wdwidth*.9), hex/2 - height, 1008*ratiosvg, 261*ratiosvg))
		}
		if (diary.length == 0) {
			diary.push(new Diary( random(wdwidth*.1, wdwidth*.9), hex/3 - height, 529*ratiosvg, 261*ratiosvg))
		}
		if (proe.length == 0) {
			proe.push(new ProE( random(wdwidth*.1, wdwidth*.9), wdheight/1.5 - height, 938*ratiosvg, 260*ratiosvg))
		}
		if (olibanner.length == 0) {
			olibanner.push(new OliBanner( random(wdwidth*.1, wdwidth*.9), wdheight/1.7 - height, 1100*ratiosvg, 261*ratiosvg))
		}
		if (savour.length == 0) {
			savour.push(new Savour( random(wdwidth*.1, wdwidth*.9), wdheight/1.7 - height, 623*ratiosvg, 261*ratiosvg))
		}
		if (cocacola.length == 0) {
			cocacola.push(new CocaCola( random(wdwidth*.1, wdwidth*.9), - hex/2 - height, 808*ratiosvg, 261*ratiosvg))
		}
		if (flowers1.length == 0) {
			flowers1.push(new Flowers1( random(wdwidth*.1, wdwidth*.9), hex - height/2, 135*ratiosvg))
		}
		if (flowers2.length == 0) {
			flowers2.push(new Flowers2( random(wdwidth*.1, wdwidth*.9), hex/2 - height, 135*ratiosvg))
		}
	}
	var loopGround = function() {
		if (ground.length == 0) {
			ground.push(new Ground(wdwidth/2, wdheight + hex/2, wdwidth, hex))
		}
	}
	var cirlesBound = function() {
		if (circles.length == 0) {
			circles.push(new Circle(wdwidth/2, wdheight/2-225*0.6, 225))
		}
	}


	if (up > 7) {
		cirlesBound();

		if (up < 7.8) {
			loopSvg()
			loopGround()
		} else {
			if (up < 7.9) {
				for ( var i = 0; i < ground.length; i++){
					if (i < ground.length) {
						ground[i].removeThisShit();
						ground.splice(i, 1);
					}
				}
			}
		}
	} else {
		for ( var i = 0; i < circles.length; i++){
			if (i < circles.length) {
				circles[i].removeThisShit();
				circles.splice(i, 1);
			}
		}
	};


	for ( var i = 0; i < circles.length; i++){
		circles[i].show();
	};
	for ( var i = 0; i < ground.length; i++){
		ground[i].show();
	};

	for ( var i = 0; i < domieSocks.length; i++){
		domieSocks[i].show();
		if (domieSocks[i].isOffScreen()) {
			domieSocks.splice(i, 1);
			i--;
		}
	};
	for ( var i = 0; i < diary.length; i++){
		diary[i].show();
		if (diary[i].isOffScreen()) {
			diary.splice(i, 1);
			i--;
		}
	};
	for ( var i = 0; i < proe.length; i++){
		proe[i].show();
		if (proe[i].isOffScreen()) {
			proe.splice(i, 1);
			i--;
		}
	};
	for ( var i = 0; i < olibanner.length; i++){
		olibanner[i].show();
		if (olibanner[i].isOffScreen()) {
			olibanner.splice(i, 1);
			i--;
		};
	};
	for ( var i = 0; i < savour.length; i++){
		savour[i].show();
		if (savour[i].isOffScreen()) {
			savour.splice(i, 1);
			i--;
		}
	};
	for ( var i = 0; i < cocacola.length; i++){
		cocacola[i].show();
		if (cocacola[i].isOffScreen()) {
			cocacola.splice(i, 1);
			i--;
		}
	};
	for ( var i = 0; i < flowers1.length; i++){
		flowers1[i].show();
		if (flowers1[i].isOffScreen()) {
			flowers1.splice(i, 1);
			i--;
		}
	};
	for ( var i = 0; i < flowers2.length; i++){
		flowers2[i].show();
		if (flowers2[i].isOffScreen()) {
			flowers2.splice(i, 1);
			i--;
		};
	};
}


// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);








