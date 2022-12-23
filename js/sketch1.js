var Engine = Matter.Engine,
	Render = Matter.Render,
	Events = Matter.Events,
	MouseConstraint = Matter.MouseConstraint,
	Mouse = Matter.Mouse,
	World = Matter.World,
	Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create(),
	world = engine.world;

var wdwidth = window.innerWidth;
var wdheight = window.innerHeight;
var hex = 200;

// create a renderer
var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: wdwidth,
			height: wdheight,
			pixelRatio: 2,
			background: '#000000',
			wireframes: false,
		}
	}
);



var ratio = 1/2;

var ratiosvg;


function setup() {

	wdwidth = window.innerWidth;
	wdheight = window.innerHeight;
	hex = 200;

	if (wdwidth > wdheight) {
		ratiosvg = ratio*wdwidth/1800;
	} else {
		ratiosvg = ratio*wdheight/1000;
	}




	ground = new Boundary(wdwidth/2, wdheight + hex/2, wdwidth, hex)
	roof = new Boundary(wdwidth/2, - hex/2, wdwidth, hex)
	wallL = new Boundary(-hex/2, wdheight/2, hex, wdheight)
	wallR = new Boundary(wdwidth + hex/2, wdheight/2, hex, wdheight)

	World.add(world, [ground, wallL, wallR, roof]);


	domieSocks = new DomieSocks(wdwidth/2, - hex/2, 1008*ratiosvg, 261*ratiosvg),
	diary = new Diary(wdwidth/2, - hex/2, 529*ratiosvg, 261*ratiosvg),
	proe = new ProE(wdwidth/2, - hex/2, 938*ratiosvg, 260*ratiosvg),
	olibanner = new OliBanner(wdwidth/2, - hex/2, 1100*ratiosvg, 261*ratiosvg)
	savour = new Savour(wdwidth/2, - hex/2, 623*ratiosvg, 261*ratiosvg),

	World.add(engine.world, [domieSocks, diary, proe, olibanner, savour]);
}






// add mouse control
var mouse = Mouse.create(render.canvas),
		mouseConstraint = MouseConstraint.create(engine, {
			mouse: mouse,
			constraint: {
				stiffness: 0.2,
				render: {
					visible: false
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



