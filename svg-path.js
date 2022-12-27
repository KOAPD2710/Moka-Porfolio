var wdwidth = $(window).scrollTop();
var wdheight = $(window).innerWidth();

if (wdwidth > wdheight) {
	ratiosvg = ratio*wdwidth/1800;
} else {
	ratiosvg = ratio*wdheight/1000;
}

var friction = .3,
	restitution = .4;

function Circle(x, y , r) {
	this.r = r;

	var options = {
		friction: .8,
		restitution: .9,
		isStatic: true,
		render : {
			fillStyle: "transparent",
		}
	}


	this.body = Bodies.circle(x, y, r, options, 450);
	World.add(world, this.body);

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		noStroke();
		ellipse(0, 0, this.r*2);
		pop();
	};
}



function DomieSocks(x, y, w, h){
	this.w = w;
	this.h = h;
	radius = h/2;

	var options = {
		friction: friction,
		restitution: restitution,
		angle : -30,
		chamfer : {
			radius : radius,
		},
		render : {
			sprite : {
				texture: 'img/dms.png',
				xScale: ratiosvg,
				yScale: ratiosvg,
			}
		},
		url : 'https://koapd2710.github.io/Domie-Website/'
	}

	console.log(ratiosvg);

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
		angle: 20,
		chamfer : {
			radius : radius,
		},
		render : {
			sprite : {
				texture: 'img/dia.png',
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
		angle: 5,
		chamfer : {
			radius : radius,
		},
		render : {
			sprite : {
				texture: 'img/proe.png',
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
		angle: 20,
		chamfer : {
			radius : radius,
		},
		render : {
			sprite : {
				texture: 'img/olip.png',
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
				texture: 'img/sav.png',
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


function CocaCola(x, y, w, h){
	this.w = w;
	this.h = h;
	radius = h/2;


	var options = {
		friction: friction,
		restitution: restitution,
		angle : 30,
		chamfer : {
			radius : radius,
		},
		render : {
			sprite : {
				texture: 'img/coca.png',
				xScale: ratiosvg,
				yScale: ratiosvg,
			},
		},
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


function Flowers1(x, y, r){
	this.r = r;

	var options = {
		friction: .1,
		restitution: .2,
		render : {
			sprite : {
				texture: 'img/flower.png',
			}
		}
	}

	this.body = Bodies.circle(x, y, r, options);
	World.add(world, this.body);

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		noStroke();
		ellipse(0, 0, this.r*2);
		pop();
	};
}

function Flowers2(x, y, r){
	this.r = r;

	var options = {
		friction: .1,
		restitution: .2,
		render : {
			sprite : {
				texture: 'img/flower.png',
			}
		}
	}

	this.body = Bodies.circle(x, y, r, options);
	World.add(world, this.body);

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		noStroke();
		ellipse(0, 0, this.r*2);
		pop();
	};
}