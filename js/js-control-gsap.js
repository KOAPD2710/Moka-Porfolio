function documentready() {
	var width = $(window).innerWidth(),
		height = $(window).innerHeight(),
		vw = $(window).innerWidth()/100,
		vh = $(window).innerHeight()/100;


	gsap.registerPlugin(ScrollTrigger);
	gsap.defaults({ease: "none",duration: 2});


	gsap.from(".nav-container .nav-logo", 1.5, {
		y: -300,
		ease: Elastic.easeOut,
		delay: 1,
	});
	gsap.from(".nav-container .nav-barnav", 1.5, {
		y: -300,
		ease: Elastic.easeOut,
		delay: 1.1,
		stagger: 0.1,
	});
	gsap.from(".intro-container .intro", 2, {
		opacity: 0,
		y: 200,
		ease: Power3.easeOut,
	});


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
			endTrigger: ".moka-folio .folio-bandroll",
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
			scrub: 3,
			markers: false,
			id: "folio-bandroll",
		},
		x: "400*vw",
	});
	gsap.to(".test .test-sticky-text", {
		scrollTrigger: {
			trigger: ".test .test-sticky-text",
			start: "center center",
			endTrigger: ".test .showreel-container .last",
			end: "center center",
			pin: ".test .test-sticky-text",
			markers: false,
			id: "sticky-text",
		},
	});

	let texttl1 = gsap.timeline({
		scrollTrigger: {
			trigger: ".test .showreel-container .showreel2",
			start: "top bottom",
			end: "bottom bottom",
			scrub: 0.5,
			markers: false,
			id: "sticky-text-div",
		},
	});
	texttl1.to(".test .test-sticky-text .text",{
		y: -300,
	});


	let texttl2 = gsap.timeline({
		scrollTrigger: {
			trigger: ".test .showreel-container .showreel3",
			start: "top bottom",
			end: "bottom bottom",
			scrub: 0.5,
			markers: false,
			id: "sticky-text-div",
		},
	});
	texttl2.to(".test .test-sticky-text .text", {	
		y: -600,
	});

	gsap.to(".test .test-sticky-text .text-fill .text1 p",{
		scrollTrigger: {
			trigger: ".test .test-sticky-text .text-fill .text1",
			start: "top bottom",
			endTrigger: ".test .showreel-container .showreel2",
			end: "bottom bottom",
			scrub: 1,
			markers: false,
			id: "sticky-text-pfill-1",
		},
		x: () => "+=" + -($(".test .test-sticky-text .text-fill .text1 p").width()*$(".test .test-sticky-text .text-fill .text1 p").length - 50*vw),
	});
	gsap.to(".test .test-sticky-text .text-fill .text2 p",{
		scrollTrigger: {
			trigger: ".test .showreel-container .showreel2",
			start: "top bottom",
			endTrigger: ".test .showreel-container .showreel3",
			end: "bottom bottom",
			scrub: 1,
			markers: false,
			id: "sticky-text-pfill-2",
		},
		x: () => "+=" + -($(".test .test-sticky-text .text-fill .text2 p").width()*$(".test .test-sticky-text .text-fill .text2 p").length - 50*vw),
	});
	gsap.to(".test .test-sticky-text .text-fill .text3 p",{
		scrollTrigger: {
			trigger: ".test .showreel-container .showreel2",
			start: "top bottom",
			endTrigger: ".test",
			end: "bottom top",
			scrub: 1,
			markers: false,
			id: "sticky-text-pfill-3",
		},
		x: () => "+=" + -($(".test .test-sticky-text .text-fill .text3 p").width()*$(".test .test-sticky-text .text-fill .text3 p").length - 50*vw),
	});

	gsap.to(".test .test-sticky-text .text-stroke .text1 p",{
		scrollTrigger: {
			trigger: ".test .test-sticky-text .text-fill .text1",
			start: "top bottom",
			endTrigger: ".test .showreel-container .showreel2",
			end: "bottom bottom",
			scrub: 1,
			markers: false,
			id: "sticky-text-pstroke-1",
		},
		x: () => "+=" + ($(".test .test-sticky-text .text-stroke .text1 p").width()*$(".test .test-sticky-text .text-stroke .text1 p").length - 50*vw),
	});
	gsap.to(".test .test-sticky-text .text-stroke .text2 p",{
		scrollTrigger: {
			trigger: ".test .showreel-container .showreel2",
			start: "top bottom",
			endTrigger: ".test .showreel-container .showreel3",
			end: "bottom bottom",
			scrub: 1,
			markers: false,
			id: "sticky-text-pstroke-2",
		},
		x: () => "+=" + ($(".test .test-sticky-text .text-stroke .text2 p").width()*$(".test .test-sticky-text .text-stroke .text2 p").length - 50*vw),
	});
	gsap.to(".test .test-sticky-text .text-stroke .text3 p",{
		scrollTrigger: {
			trigger: ".test .showreel-container .showreel2",
			start: "top bottom",
			endTrigger: ".test",
			end: "bottom top",
			scrub: 1,
			markers: false,
			id: "sticky-text-pstroke-3",
		},
		x: () => "+=" + ($(".test .test-sticky-text .text-stroke .text3 p").width()*$(".test .test-sticky-text .text-stroke .text3 p").length - 50*vw),
	});

	gsap.to(".test2 .test-sticky-imgs", {
		scrollTrigger: {
			trigger: ".test2",
			start: "top top",
			end: "bottom bottom",
			pin: ".test2 .test-sticky-imgs",
			markers: false,
			id: "test-sticky-imgs",
		},
	});
	gsap.to(".test2 .test-sticky-imgs-move", {
		scrollTrigger: {
			trigger: ".test2",
			start: "top bottom",
			endTrigger: ".test2 .content .curious",
			end: "top bottom",
			scrub: 1,
			markers: false,
			id: "test-sticky-imgs-move",
		},
		y: 25*vh,
	});
	gsap.to(".test2 .test-sticky-imgs-zoom", {
		scrollTrigger: {
			trigger: ".test",
			start: "bottom bottom",
			endTrigger: ".test2",
			end: "bottom bottom",
			scrub: 2,
			markers: false,
			id: "test-sticky-imgs",
		},
		scale: 1,
	});
	gsap.to(".test2 .test-sticky-imgs .p1", {
		scrollTrigger: {
			trigger: ".test2 .content .curious",
			start: "center top",
			endTrigger: ".test2 .content .inspired",
			end: "top center",
			scrub: 1,
			markers: false,
			id: "test-sticky-imgs-p1",
		},
		opacity: 0,
	})
	gsap.to(".test2 .test-sticky-imgs .p2", {
		scrollTrigger: {
			trigger: ".test2 .content .inspired",
			start: "center top",
			endTrigger: ".test2 .content .focused",
			end: "top center",
			scrub: 1,
			markers: false,
			id: "test-sticky-imgs-p1",
		},
		opacity: 0,
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
};

documentready();
