var wdwidth = window.innerWidth;
var wdheight = window.innerHeight;

if (wdwidth > wdheight) {
	ratiosvg = ratio*wdwidth/1800;
} else {
	ratiosvg = ratio*wdheight/1000;
}

var friction = .4,
	restitution = .3;


function DomieSocks(x, y, w, h){
	this.w = w;
	this.h = h;
	radius = h/2;

	var options = {
		friction: friction,
		restitution: restitution,
		chamfer : {
			radius : radius,
		},
		render : {
			sprite : {
				texture: 'https://imgur.com/qjHSlG2.png',
				xScale: ratiosvg,
				yScale: ratiosvg,
			}
		}
	}

	this.body = Bodies.rectangle(x, y, w, h, options);
	World.add(world, this.body);

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;

		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		noStroke();
		rect(0, 0, this.w, this.h);
		pop();
	};
}


function Diary(x, y, w, h){
	this.w = w;
	this.h = h;
	radius = h/2;

	var options = {
		friction: friction,
		restitution: restitution,
		chamfer : {
			radius : radius,
		},
		render : {
			sprite : {
				texture: 'https://imgur.com/XUjTm7N.png',
				xScale: ratiosvg,
				yScale: ratiosvg,
			}
		}
	}

	this.body = Bodies.rectangle(x, y, w, h, options);
	World.add(world, this.body);

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		noStroke();
		rect(0, 0, this.w, this.h);
		pop();
	};
}


function ProE(x, y, w, h){
	this.w = w;
	this.h = h;
	radius = h/2;

	var options = {
		friction: friction,
		restitution: restitution,
		chamfer : {
			radius : radius,
		},
		render : {
			sprite : {
				texture: 'https://imgur.com/rD1wqHB.png',
				xScale: ratiosvg,
				yScale: ratiosvg,
			}
		}
	}

	this.body = Bodies.rectangle(x, y, w, h, options);
	World.add(world, this.body);

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		noStroke();
		rect(0, 0, this.w, this.h);
		pop();
	};
}


function OliBanner(x, y, w, h){
	this.w = w;
	this.h = h;
	radius = h/2;

	var options = {
		friction: friction,
		restitution: restitution,
		chamfer : {
			radius : radius,
		},
		render : {
			sprite : {
				texture: 'https://i.imgur.com/ciua9Yv.png',
				xScale: ratiosvg,
				yScale: ratiosvg,
			}
		}
	}

	this.body = Bodies.rectangle(x, y, w, h, options);
	World.add(world, this.body);

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		noStroke();
		rect(0, 0, this.w, this.h);
		pop();
	};
}


function Savour(x, y, w, h){
	this.w = w;
	this.h = h;
	radius = h/2;

	var options = {
		friction: friction,
		restitution: restitution,
		chamfer : {
			radius : radius,
		},
		render : {
			sprite : {
				texture: 'https://i.imgur.com/Kg2ast6.png',
				xScale: ratiosvg,
				yScale: ratiosvg,
			}
		}
	}

	this.body = Bodies.rectangle(x, y, w, h, options);
	World.add(world, this.body);

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		noStroke();
		rect(0, 0, this.w, this.h);
		pop();
	};
}