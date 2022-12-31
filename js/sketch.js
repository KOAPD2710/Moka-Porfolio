var Engine = Matter.Engine,
	Render = Matter.Render,
	Runner = Matter.Runner,
	Events = Matter.Events,
	MouseConstraint = Matter.MouseConstraint,
	Mouse = Matter.Mouse,
	World = Matter.World,
	Bodies = Matter.Bodies;
	Body = Matter.Body;

// create an engine
var engine = Engine.create(),
	world = engine.world;

var wdwidth = window.innerWidth;
var wdheight = window.innerHeight;
var hex = 200;

// create a renderer
var render = Render.create({
		element: document.getElementById('physicscreen'),
		engine: engine,
		options: {
			width: wdwidth,
			height: wdheight,
			pixelRatio: 3,
			background: 'transparent',
			contain: 'transparent',
			wireframes: false,
		}
	}
);


engine.world.gravity.x = 0;
engine.world.gravity.y = .5;




var runner = Runner.create();
    Runner.run(runner, engine);

var ratio = 1/2;
var ratiosvg;

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

	ground =	new Boundary(wdwidth/2, wdheight + hex/2, wdwidth, hex);
	roof =		new Boundary(wdwidth/2, - hex, wdwidth, hex);
	wallL =		new Boundary(-hex/2, wdheight/2, hex, wdheight);
	wallR = 	new Boundary(wdwidth + hex/2, wdheight/2, hex, wdheight);
	cirrle = 	new Circle(wdwidth/2, wdheight/2 - .6*225, 225);

	domieSocks = new DomieSocks	(wdwidth/10, hex/2, 1008*ratiosvg, 261*ratiosvg);
	diary = new Diary			(wdwidth/3, hex/3, 529*ratiosvg, 261*ratiosvg);
	proe = new ProE				(wdwidth/2.5, wdheight/1.5, 938*ratiosvg, 260*ratiosvg);
	olibanner = new OliBanner	(wdwidth/1.5, wdheight/1.7, 1100*ratiosvg, 261*ratiosvg);
	savour = new Savour			(wdwidth/3, wdheight/1.7, 623*ratiosvg, 261*ratiosvg);
	cocacola = new CocaCola		(wdwidth - wdwidth/10, - hex/2, 808*ratiosvg, 261*ratiosvg);
	flowers1 = new Flowers1		(wdwidth/10, hex, 135*ratiosvg);
	flowers2 = new Flowers2		(50 + wdwidth - wdwidth/10, hex/2, 135*ratiosvg);

	document.addEventListener("scroll", e=>{
		scroll = $(window).scrollTop();
		up = scroll / wdheight;
		if (up > 7.5) {
			ground.removeFromWorld();
		};
	});
	// 		ground.addFromWorld();
	// 		domieSocks.addFromWorld();
	// 		diary.addFromWorld();
	// 		proe.addFromWorld();
	// 		olibanner.addFromWorld();
	// 		savour.addFromWorld();
	// 		cocacola.addFromWorld();
	// 		flowers1.addFromWorld();
	// 		flowers2.addFromWorld();
	
}


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
					break;
				}
			}
		}
	}
});


// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);