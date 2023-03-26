function pageTransition() {
	var tl = gsap.timeline();

	tl.to("ul#transition li", {
		duration: .5,
		scaleY: 1,
		transformOrigin: "bottom left",
		stagger: .2,
		ease: Power3.easeOut,
	}),
	tl.to("ul#transition li", {
		duration: .5,
		scaleY: 0 ,
		transformOrigin: "bottom left",
		stagger: .1,
		delay: .1,
		ease: Power1.easeInOut,
	})
}

function contentAnitamtion() {
	gsap.from(".nav-container .nav-logo p", 1.5, {
		y: -300,
		ease: Elastic.easeOut,
		stagger: 0.05,
	});
	gsap.from(".nav-container .nav-barnav", 2, {
		y: -250,
		ease: Elastic.easeOut,
		delay: 0.1,
		stagger: 0.1,
	});
	gsap.from(".intro-container .intro", 2, {
		opacity: 0,
		y: 200,
		ease: Power3.easeOut,
	});
}

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}


$(document).ready(function(){

	barba.init({
		sync: true,

		transitions: [
			{	
				name: "index",
				namespaces: "home",
				async leave(data) {
					const done = this.async();

					pageTransition();
					await delay(1000);
					done();
				},
				async enter(data) {
					contentAnitamtion();
				},
				async once(data) {
					contentAnitamtion();
				}
			}
		]
	});
})