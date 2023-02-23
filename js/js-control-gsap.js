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
		scale: "1",
	});
	gsap.to(".intro video", {
		scrollTrigger: {
			trigger: ".intro img",
			start: "center 50%",
			end: () => "+=" + height,
			scrub: true,
			markers: false,
			id: "zoom",
		},
		scale: "1",
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
		y: 50*vh,
	});
	gsap.to(".intro video", {
		scrollTrigger: {
			trigger: ".intro-container",
			start: () => "+=" + height,
			end: "bottom 0%",
			scrub: 1,
			markers: false,
			id: "move",
		},
		y: 50*vh,
	});

	gsap.to(".moka-bandroll img", {
		scrollTrigger: {
			trigger: ".moka-bandroll",
			start: "top bottom",
			endTrigger: ".moka-folio .moka-bandroll",
			end: "bottom 0%",
			markers: false,
			id: "moka-bandroll",
		},
		rotate: "-360",
		repeat: "-1",
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
		x: "-400*vw",
	});
	gsap.to(".moka-bandroll div", {
		scrollTrigger: {
			trigger: ".moka-bandroll",
			start: "top bottom",
			endTrigger: ".moka-folio .moka-bandroll",
			end: "bottom 0%",
			scrub: 3,
			markers: false,
			id: "moka-bandroll",
		},
		x: "-400*vw",
	});
	gsap.to(".folio-bandroll img", {
		scrollTrigger: {
			trigger: ".folio-bandroll",
			start: "top bottom",
			endTrigger: ".folio-folio .folio-bandroll",
			end: "bottom 0%",
			markers: false,
			id: "folio-bandroll",
		},
		rotate: "360",
		repeat: "-1",
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
		x: "400*vw",
	});
	gsap.to(".folio-bandroll div", {
		scrollTrigger: {
			trigger: ".folio-bandroll",
			start: "top bottom",
			endTrigger: ".moka-folio .folio-bandroll",
			end: "bottom 0%",
			scrub: 4,
			markers: false,
			id: "folio-bandroll",
		},
		x: "400*vw",
	});
	gsap.to(".test .sticky-text", {
		scrollTrigger: {
			trigger: ".test .sticky-text",
			start: "center center",
			endTrigger: ".test .showreel-container .last",
			end: "center center",
			pin: ".test .sticky-text",
			markers: false,
			id: "sticky-text",
		}
	})
	//------------------Change Background------------------//
	// gsap.to(".intro-container", {
	// 	scrollTrigger: {
	// 		trigger: ".intro",
	// 		start:"bottom top",
	// 		end: "top top",
	// 		markers: true,
	// 		id: "black",
	// 	},
	// 	backgroundColor: "black",
	// });
	// gsap.to(".intro-container", {
	// 	scrollTrigger: {
	// 		trigger: ".moka-folio",
	// 		start:"bottom bottom",
	// 		markers: false,
	// 		id: "teel",
	// 	},
	// 	backgroundColor: "var(--t)",
	// });
})