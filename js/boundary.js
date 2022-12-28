function Boundary(x, y, w, h){
	var options = {
		friction: .1,
		restitution: .1,
		isStatic: true,
		render : {
			fillStyle: "transparent",
		}
	}
	
	this.body = Bodies.rectangle(x, y, w, h, options);
	this.w = w;
	this.h = h;
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