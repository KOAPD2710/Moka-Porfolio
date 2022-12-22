function Illustrator() {

	var options = {
		friction: .8,
		restitution: .9,

		render: {
			sprite: {
				texture: '../img/sav.png', xScale: 0.5, yScale: 0.5
			}
		}
	}

	var border = 2
	var radius = 20

	var illustration = Bodies.rectangle(70, 500, 133, 40, {chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/RADmiFI.png', xScale: 0.5, yScale: 0.5 }}})

	this.body = illustration;

	World.add(world, this.body);

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		noStroke();
		pop();
	};

}


// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);





