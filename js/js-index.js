function index() {
	var width = $(window).innerWidth(),
		height = $(window).innerHeight(),
		vw = $(window).innerWidth()/100,
		vh = $(window).innerHeight()/100;
		
	gsap.defaults({ease: "none",duration: 2});

	// gsap.to(".intro img", {
	// 	scrollTrigger: {
	// 		trigger: ".intro-container",
	// 		start: "top top",
	// 		// end: () => "+=" + height,
	// 		end: "bottom center",
	// 		scrub: true,
	// 		markers: false,
	// 		id: "zoom",
	// 	},
	// 	scale: "1.7",
	// });
	// gsap.to(".intro img", {
	// 	scrollTrigger: {
	// 		trigger: ".intro-container",
	// 		start: () => "+=" + height,
	// 		end: "bottom 0%",
	// 		scrub: 1,
	// 		markers: false,
	// 		id: "move",
	// 	},
	// 	y: 50*vh,
	// });
	gsap.to(".intro video", {
		scrollTrigger: {
			trigger: ".intro-container",
			start: "top top",
			// end: () => "+=" + height,
			end: "bottom center",
			scrub: true,
			markers: false,
			id: "zoom",
		},
		scale: "1.7",
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

	gsap.from(".moka-marquee .moka-text", {
		scrollTrigger: {
			trigger: ".moka-marquee .moka-text",
			start: "top bottom",
			end: "top 30%",
			scrub: 2,
			markers: false,
			id: "moka-text",
		},
		y: 200,
	})

	gsap.to(".moka-bandroll img", {
		scrollTrigger: {
			trigger: ".moka-bandroll",
			start: "top bottom",
			endTrigger: ".moka-marquee .moka-bandroll",
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
			endTrigger: ".moka-marquee .moka-bandroll",
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
			endTrigger: ".moka-marquee .moka-bandroll",
			end: "bottom 0%",
			scrub: 3,
			markers: false,
			id: "moka-bandroll",
		},
		x: "-400*vw",
	});

	var iamgoodat = $(".i-am-good-at").height(),
		iamgoodatcontainer = $(".i-am-good-at .text-container").height();
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
		y: () => "+=" + (iamgoodat - iamgoodatcontainer - (height - iamgoodatcontainer)/2),
	});

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
	gsap.from(".i-am-good-at .text-container .sticker", .7, {
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
		delay: .5,
	});

	// gsap.to(".folio-marquee .folio-bandroll .marquee-container", {
	// 	x: () => "+=" + -($(".folio-bandroll .marquee-container").width()),
	// 	duration: 5,
	// 	repeat: -1,
	// })

	gsap.to(".folio-marquee .bg-b", {
		scrollTrigger: {
			trigger: ".folio-marquee .bg-b",
			start: "top center",
			end: "bottom top",
			scrub: 1,
			markers: false,
			id: "folio-bandroll-move",
		},
		y: () => "+=" + -(0.5*height),
	})
	gsap.to(".folio-bandroll img", {
		scrollTrigger: {
			trigger: ".folio-marquee .folio-bandroll",
			start: "top bottom",
			endTrigger: ".folio-marquee .folio-bandroll",
			end: "bottom 0%",
			markers: false,
			id: "folio-bandroll",
		},
		rotate: "360",
		repeat: "-1",
	});
	gsap.to(".folio-bandroll p", {
		scrollTrigger: {
			trigger: ".folio-marquee .folio-bandroll",
			start: "top bottom",
			endTrigger: ".folio-marquee .folio-bandroll",
			end: "bottom 0%",
			scrub: 2,
			markers: false,
			id: "folio-bandroll-p",
		},
		x: "400*vw",
	});
	gsap.to(".folio-bandroll .marquee-container div", {
		scrollTrigger: {
			trigger: ".folio-marquee .folio-bandroll",
			start: "top bottom",
			endTrigger: ".folio-marquee .folio-bandroll",
			end: "bottom 0%",
			scrub: 3,
			markers: false,
			id: "folio-bandroll-div",
		},
		x: "400*vw",
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
			trigger: ".test2",
			start: "top bottom",
			endTrigger: ".test2",
			end: "bottom bottom",
			scrub: 2,
			markers: false,
			id: "test-sticky-imgs",
		},
		scale: 1,
	});

	gsap.from(".test2 .test-sticky-imgs img", {
		scrollTrigger: {
			trigger: ".test2",
			start: "-300px top",
			end: "top top",
			scrub: 1,
			markers: false,
			id: "test-sticky-imgs-brightness",
		},
		filter: "brightness(1.1)"
	})
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
};

function indexAlign(){

	var width = $(window).innerWidth(),
		height = $(window).innerHeight();

	var naviheight 		= $(".nav-container").height(),
		navlinkheight	= $(".nav-bar").height();
	$(".nav-bar").css("margin-top", ' ' + (naviheight - navlinkheight)/2 + 'px ');
	$(".nav-bar").css("margin-bottom", ' ' + (naviheight - navlinkheight)/2 + 'px ');


	var flower1height 	= $(".moka-bandroll img").height(),
		mokabandroll	= $(".moka-bandroll").height();
	$(".moka-bandroll img").css("margin-top", ' ' + (mokabandroll - flower1height)/2 + 'px ');
	$(".moka-bandroll img").css("margin-bottom", ' ' + (mokabandroll - flower1height)/2 + 'px ');

	var flower2height 	= $(".folio-bandroll img").height(),
		foliobandroll	= $(".folio-bandroll").height();
	$(".folio-bandroll img").css("margin-top", ' ' + ((foliobandroll - flower2height)/2)*1.2 + 'px ');
	// $(".folio-bandroll img").css("margin-bottom", ' ' + (foliobandroll - flower2height)/2 + 'px ');

	// var curiousheight	= $(".curious").height(),
	// 	curiousnavheight	= $(".curious nav").height();

	// $(".curious nav").css("margin-top", ' ' + ((curiousheight - curiousnavheight)/2)*1.2 + 'px ');
	// $(".curious nav").css("margin-bottom", ' ' + ((curiousheight - curiousnavheight)/2)*1.2 + 'px ');

	var iamgoodat = $(".i-am-good-at .text-container").height();
	$(".i-am-good-at").css("padding-top", ' ' + (height - iamgoodat)/2 + 'px ');
}

window.addEventListener("resize", () => {
	var width = $(window).innerWidth(),
		height = $(window).innerHeight();
	console.log(width, height);
	if (width >= height) {
		$("#horizontal-screen").css("display", "block");
		$("#vertical-screen").css("display", "none");
		console.log("horizontal-screen");
	} else {
		$("#horizontal-screen").css("display", "none");
		$("#vertical-screen").css("display", "block");
		console.log("vertical-screen");
	}
	indexAlign();
});

$(document).ready(function() {

	index();
	indexAlign();

	var images =[];
	var request = null;
	var mouse = {
		x: 0,
		y: 0
	};

	var cx = window.innerWidth / 2;
	var cy = window.innerHeight / 2;

	$(window).mousemove(function(event) {
		var scroll = $(window).scrollTop();
		mouse.x = event.pageX;
		mouse.y = event.pageY - scroll;

		cancelAnimationFrame(request);
		request = requestAnimationFrame(update);
	});

	function update() {

		dx = mouse.x - cx;
		dy = mouse.y - cy;

		tiltx = (dy / cy);
		tilty = -(dx / cx);
		radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
		degree = 30*radius;
		TweenMax.to(".i-am-good-at .text-container img", 1, {
			transform: 'rotate3d(' + 1.5*(tiltx) + ', ' + 1.5*(tilty) + ', 0, ' + degree + 'deg)',
			ease: Power2.easeOut,
		});
	}

	$(window).resize(function() {
		cx = window.innerWidth / 2;
		cy = window.innerHeight / 2;
	});
});








