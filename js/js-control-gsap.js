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
	gsap.from(".nav-container .nav-barnav", 2, {
		y: -250,
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
			trigger: ".intro-container",
			start: "top top",
			end: () => "+=" + height,
			scrub: true,
			markers: false,
			id: "zoom",
		},
		scale: "1",
	});
	gsap.to(".intro video", {
		scrollTrigger: {
			trigger: ".intro-container",
			start: "top top",
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

	var iamgoodat = $(".i-am-good-at").height();
	gsap.to(".i-am-good-at .text-container", {
		scrollTrigger: {
			trigger: ".i-am-good-at",
			start: "top top",
			endTrigger: ".i-am-good-at",
			end: "bottom bottom",
			scrub: true,
			// pin: ".i-am-good-at .text-container",
			markers: false,
			id: "text-container",
		},
		y: () => "+=" + (iamgoodat - height),
	});
	// gsap.from(".i-am-good-at .text-container .i-am p", {
	// 	scrollTrigger: {
	// 		trigger: ".i-am-good-at .text-container",
	// 		start: "center center",
	// 		endTrigger: ".i-am-good-at",
	// 		end: "bottom bottom",
	// 		scrub: "random(1, 2, .1)",
	// 		markers: false,
	// 		id: "i-am p",
	// 	},
	// 	ease:  Power3.easeInOut,
	// 	x: "random(-100, 500)",
	// 	y: "random(-10, 500)",
	// 	scale: "random(.3, 1, .05)",
	// 	// rotate: "random(-360, 360)",
	// });

	var textexploreanimation = Power3.linear;
	const textcontainertl = ({
		trigger: ".i-am-good-at",
		start: "100 top",
		end: () => "+=" + (2*height - 100),
		scrub: "random(.5, 10, 1)",
		markers: false,
		id: "i-am p",
	});
	gsap.from(".i-am-good-at .text-container .i-am .i", {
		scrollTrigger: textcontainertl,
		x: .1*width,
		y: .1*height,
		ease: textexploreanimation,
	});
	gsap.from(".i-am-good-at .text-container .i-am .a1", {
		scrollTrigger: textcontainertl,
		x: -.1*width,
		y: -.2*height,
		ease: textexploreanimation,
	});
	gsap.from(".i-am-good-at .text-container .i-am .m", {
		scrollTrigger: textcontainertl,
		x: .2*width,
		y: -.2*height,
		ease: textexploreanimation,
	});
	gsap.from(".i-am-good-at .text-container .good-at .g", {
		scrollTrigger: textcontainertl,
		x: .5*width,
		y: -.2*height,
		ease: textexploreanimation,
	});
	gsap.from(".i-am-good-at .text-container .good-at .flower1", {
		scrollTrigger: textcontainertl,
		x: .2*width,
		y: .1*height,
		ease: textexploreanimation,
	});
	gsap.from(".i-am-good-at .text-container .good-at .flower2", {
		scrollTrigger: textcontainertl,
		x: -.1*width,
		y: .2*height,
		ease: textexploreanimation,
	});
	gsap.from(".i-am-good-at .text-container .good-at .d", {
		scrollTrigger: textcontainertl,
		x: -.5*width,
		y: .15*height,
		ease: textexploreanimation,
	});
	gsap.from(".i-am-good-at .text-container .good-at .a2", {
		scrollTrigger: textcontainertl,
		x: .1*width,
		y: .25*height,
		ease: textexploreanimation,
	});
	gsap.from(".i-am-good-at .text-container .good-at .t", {
		scrollTrigger: textcontainertl,
		x: -.05*width,
		y: -.4*height,
		ease: textexploreanimation,
	});
	const changecolortl = ({
		trigger: ".i-am-good-at",
		start: () => "+=" + (2*height - 100),
		end: () => "+=" + 50,
		scrub: "random(.5, 10, 1)",
		markers: false,
		id: "i-am-good-at-bg",
	});
	gsap.to(".i-am-good-at", {
		scrollTrigger: changecolortl,
		backgroundColor: "#151515", ease:"linear",
	});
	gsap.to(".i-am-good-at .text-container p", {
		scrollTrigger: changecolortl,
		color: "#FFF4E6", ease:"linear",
	});
	gsap.to(".i-am-good-at .flowers-good-at .flower2", {
		scrollTrigger: changecolortl,
		fill: "#FFF4E6", ease:"linear",
	});

	gsap.from(".i-am-good-at .text-container img", 1, {
		scrollTrigger: {
			trigger: ".i-am-good-at",
			start: () => "+=" + (2*height + 400),
			toggleActions: "play none none reverse",
			markers: false,
			id: "i-am-good-at-img",
		},
		ease: Back.easeOut,
		scale: 0,
		stagger: .2,

	})



	// gsap.from(".i-am-good-at .text-container .flowers-good-at p", {
	// 	scrollTrigger: {
	// 		trigger: ".i-am-good-at .text-container",
	// 		start: "center center",
	// 		endTrigger: ".i-am-good-at",
	// 		end: "bottom bottom",
	// 		scrub: "random(1, 2, .1)",
	// 		markers: false,
	// 		id: "i-am p",
	// 	},
	// 	ease:  Power3.easeInOut,
	// 	x: "random(-500, 100)",
	// 	y: "random(-500, -10)",
	// 	scale: "random(.3, 1, .05)",
	// 	// rotate: "random(-360, 360)",
	// });


	// var stickerheight = $(".sticker").height(),
	// 	stickercontainer = $(".sticker .sticker-container").height();
	// gsap.to(".sticker .sticker-container", {
	// 	scrollTrigger: {
	// 		trigger: ".sticker",
	// 		start: "top top",
	// 		end: "bottom bottom",
	// 		// pin: ".sticker .sitcker-container",
	// 		scrub: .5,
	// 		markers: false,
	// 		id: "sticker-container",
	// 	},
	// 	y: () => "+=" + (stickerheight - stickercontainer),
	// });











	gsap.to(".test .test-sticky-text", {
		scrollTrigger: {
			trigger: ".test .test-sticky-text",
			start: "center center",
			endTrigger: ".test .showreel-container .last",
			end: "bottom bottom",
			pin: ".test .test-sticky-text",
			markers: false,
			id: "sticky-text",
		},
	});

	let texttl1 = gsap.timeline({
		scrollTrigger: {
			trigger: ".test .showreel-container .showreel1",
			start: "bottom center",
			end: "bottom top",
			scrub: 0.5,
			markers: false,
			id: "sticky-text-div",
		},
	});
	texttl1.to(".test .test-sticky-text .text",{
		y: -247,
	});
	let texttl2 = gsap.timeline({
		scrollTrigger: {
			trigger: ".test .showreel-container .showreel2",
			start: "bottom center",
			end: "bottom top",
			scrub: 0.5,
			markers: false,
			id: "sticky-text-div",
		},
	});
	texttl2.to(".test .test-sticky-text .text", {	
		y: -494,
	});

	var textfillmove1 = ($(".test .test-sticky-text .text-fill .text1 p").width()*$(".test .test-sticky-text .text-fill .text1 p").length - 50*vw);
	gsap.to(".test .test-sticky-text .text-fill .text1 p",{
		scrollTrigger: {
			trigger: ".test .test-sticky-text .text-fill .text1",
			start: "top bottom",
			endTrigger: ".test .showreel-container .showreel1",
			end: "bottom top",
			scrub: 1,
			markers: false,
			id: "sticky-text-pfill-1",
		},
		x: () => "+=" + -textfillmove1,
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
		x: () => "+=" + textfillmove1,
	});

	var textfillmove2 = ($(".test .test-sticky-text .text-fill .text2 p").width()*$(".test .test-sticky-text .text-fill .text2 p").length - 50*vw);
	gsap.to(".test .test-sticky-text .text-fill .text2 p",{
		scrollTrigger: {
			trigger: ".test .showreel-container .showreel1",
			start: "bottom center",
			endTrigger: ".test .showreel-container .showreel2",
			end: "bottom top",
			scrub: 1,
			markers: false,
			id: "sticky-text-pfill-2",
		},
		x: () => "+=" + -textfillmove2,
	});
	gsap.to(".test .test-sticky-text .text-stroke .text2 p",{
		scrollTrigger: {
			trigger: ".test .showreel-container .showreel1",
			start: "bottom center",
			endTrigger: ".test .showreel-container .showreel2",
			end: "bottom top",
			scrub: 1,
			markers: false,
			id: "sticky-text-pstroke-2",
		},
		x: () => "+=" + textfillmove2,
	});

	var textfillmove3 = ($(".test .test-sticky-text .text-fill .text3 p").width()*$(".test .test-sticky-text .text-fill .text3 p").length - 50*vw);
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
		x: () => "+=" + -textfillmove3,
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
		x: () => "+=" + textfillmove3,
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
