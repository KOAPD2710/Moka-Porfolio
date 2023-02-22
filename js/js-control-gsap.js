$(document).ready(function(e){
	var width = $(window).innerWidth(),
		height = $(window).innerHeight(),
		vw = $(window).innerWidth()/100,
		vh = $(window).innerHeight()/100;


	gsap.registerPlugin(ScrollTrigger);
	gsap.defaults({ease: "none",duration: 3});

	gsap.to(".intro img", {
		scrollTrigger: {
			trigger: ".intro img",
			start: "center 50%",
			end: () => "+=" + height,
			scrub: true,
			markers: false,
			id: "zoom",
		},
		scale: 1,
	});

	gsap.to(".intro img", {
		scrollTrigger: {
			trigger: ".intro-container",
			start: () => "+=" + height,
			end: "bottom 0%",
			scrub: 1,
			markers: false,
			id: "move",
		},
		y: 30*vh,
	});

	gsap.to(".moka-bandroll p", {
		scrollTrigger: {
			trigger: ".moka-bandroll",
			start: "top bottom",
			endTrigger: ".moka-folio .moka-bandroll",
			end: "bottom 0%",
			scrub: 2,
			markers: false,
			id: "moka-bandroll",
		},
		x: "-300*vw",
	});
	gsap.to(".moka-bandroll img", {
		scrollTrigger: {
			trigger: ".moka-bandroll",
			start: "top bottom",
			endTrigger: ".moka-folio .moka-bandroll",
			end: "bottom 0%",
			scrub: 3,
			markers: false,
			id: "moka-bandroll",
		},
		x: "-300*vw",
		rotate: 360,
	});

	gsap.to(".folio-bandroll p", {
		scrollTrigger: {
			trigger: ".folio-bandroll",
			start: "top bottom",
			endTrigger: ".moka-folio .folio-bandroll",
			end: "bottom 0%",
			scrub: 2,
			markers: false,
			id: "folio-bandroll",
		},
		x: "300*vw",
	});
	gsap.to(".folio-bandroll img", {
		scrollTrigger: {
			trigger: ".folio-bandroll",
			start: "top bottom",
			endTrigger: ".moka-folio .folio-bandroll",
			end: "bottom 0%",
			scrub: 4,
			markers: false,
			id: "folio-bandroll",
		},
		x: "300*vw",
		rotate: 360,
	});
})