function work() {
	var width = $(window).innerWidth(),
		height = $(window).innerHeight();

	gsap.defaults({ease: "none",duration: 2});


	gsap.to('.section1 .play-text .head.p', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 1,
			markers: false,
		},
		x: () => "+=" + width
	})
	gsap.to('.section1 .play-text .head.l', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 2,
			markers: false,
		},
		x: () => "+=" + width
	})
	gsap.to('.section1 .play-text .head.a', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 3,
			markers: false,
		},
		x: () => "+=" + width
	})
	gsap.to('.section1 .play-text .head.y', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 2,
			markers: false,
		},
		x: () => "+=" + width
	})
	gsap.to('.section1 .ground .head.g', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 1,
			markers: false,
		},
		x: () => "+=" + -width
	})
	gsap.to('.section1 .ground .head.r', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 2,
			markers: false,
		},
		x: () => "+=" + -width
	})
	gsap.to('.section1 .ground .head.nav', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 3,
			markers: false,
		},
		x: () => "+=" + -width
	})
	gsap.to('.section1 .ground .head.u', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 1,
			markers: false,
		},
		x: () => "+=" + -width
	})
	gsap.to('.section1 .ground .head.n', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 2,
			markers: false,
		},
		x: () => "+=" + -width
	})
	gsap.to('.section1 .ground .head.d', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 1,
			markers: false,
		},
		x: () => "+=" + -width
	})
	// gsap.from('.section1 .text', {
	// 	scrollTrigger: {
	// 		trigger: ".section1",
	// 		start: "center center",
	// 		// start: () => "+=" + , 
	// 		end: "bottom center",
	// 		scrub: true,
	// 		markers: true
	// 	},
	// 	y: () => "+=" + -.5*width
	// })

	var sc1sc2 = ({
		trigger: ".section2",
		start: "top 75%",
		end: "top 50%",
		scrub: 1,
		markers: false
	})

	gsap.fromTo("body", {
		background: "#151515"
	}, {
		scrollTrigger: sc1sc2,
		background: "#FFF4E6"
	})
	gsap.to(".section1 .text", {
		scrollTrigger: sc1sc2,
		color: "#151515"
	})
};

function marquee() {
	var mqgap = 100,
		width = $(window).innerWidth(),
		height = $(window).innerHeight();

	$(".section2 .marquee-content").css('padding-left', ' ' + mqgap/2 +  'px ');
	$(".section2 .marquee-content").css('padding-right', ' ' + mqgap/2 +  'px ');
	gsap.to(".section2 .marquee-content", {
		x: () => "+=" + -(width+mqgap),
		repeat: -1,
		duration: 5,
		ease: "none"
	})
}

window.addEventListener('load', function(){
	work();
	marquee();

	window.addEventListener('resize', function() {
		work();
		marquee();
	})
})


	



