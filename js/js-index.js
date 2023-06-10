function index() {
	var width = $(window).innerWidth(),
		height = $(window).innerHeight();

	gsap.defaults({ease: "none",duration: 2});

	gsap.to(".intro video", {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			// end: () => "+=" + height,
			end: "bottom 70%",
			scrub: true,
			markers: false,
		},
		scale: "1.7",
	});

	gsap.to(".intro video", {
		scrollTrigger: {
			trigger: ".section1",
			start: () => "+=" + height,
			end: "bottom 0%",
			scrub: true,
			markers: false,
		},
		y: () => "+=" + 50*height/100,
	});
	var section2gap = 5*width/100,
		sec2marqueewidth = $(".section2 .marquee-content").width()+section2gap*2;
	$(".section2 .marquee-content").css('gap', ' ' + section2gap +  'px ');
	$(".section2 .marquee-content").css('padding-left', ' ' + section2gap/2 +  'px ');
	$(".section2 .marquee-content").css('padding-right', ' ' + section2gap/2 +  'px ');
	gsap.to(".section2 .marquee-content", {
		x: () => "+=" + -sec2marqueewidth,
		repeat: -1,
		duration: 5,
		ease: "none"
	})
	gsap.to(".section2 .marquee-content img", {
		rotate: -360,
		repeat: -1,
		duration: 2.5,
		ease: "none"
	})

	var textexploreanimation = Power3.linear;
	const textcontainertl = ({
		trigger: ".section3",
		start: "-150 top",
		end: () => "+=" + (height + 150),
		scrub: 2,
		markers: false,
	});
	gsap.from(".section3 .text-container .i-am .i", {
		scrollTrigger: textcontainertl,
		x: .1*width,
		y: .1*height,
		ease: textexploreanimation,
	});
	gsap.from(".section3 .text-container .i-am .a1", {
		scrollTrigger: textcontainertl,
		x: -.1*width,
		y: -.2*height,
		ease: textexploreanimation,
	});
	gsap.from(".section3 .text-container .i-am .m", {
		scrollTrigger: textcontainertl,
		x: .2*width,
		y: -.2*height,
		ease: textexploreanimation,
	});
	gsap.from(".section3 .text-container .good-at .g", {
		scrollTrigger: textcontainertl,
		x: .5*width,
		y: -.2*height,
		ease: textexploreanimation,
	});
	
	gsap.from(".section3 .text-container .good-at .flower1", {
		scrollTrigger: textcontainertl,
		x: .2*width,
		y: .1*height,
		ease: textexploreanimation,
	});
	gsap.from(".section3 .text-container .good-at .flower2", {
		scrollTrigger: textcontainertl,
		x: -.1*width,
		y: .2*height,
		ease: textexploreanimation,
	});
	gsap.from(".section3 .text-container .good-at .d", {
		scrollTrigger: textcontainertl,
		x: -.5*width,
		y: .15*height,
		ease: textexploreanimation,
	});
	gsap.from(".section3 .text-container .good-at .a2", {
		scrollTrigger: textcontainertl,
		x: .1*width,
		y: .25*height,
		ease: textexploreanimation,
	});
	gsap.from(".section3 .text-container .good-at .t", {
		scrollTrigger: textcontainertl,
		x: -.05*width,
		y: -.4*height,
		ease: textexploreanimation,
	});

	gsap.to(".section3 p", {
		scrollTrigger: {
			trigger: ".section3",
			start: () => "+=" + (height + 100),
			end: () => "+=" + 300,
			scrub: 1,
			markers: false,
		},
		color: "#FFF4E6",
		stagger: .2,
		ease : "none",
		duration: .3
	})

	gsap.to(".section3 .text-container .flowers-good-at .flowers svg", {
		scrollTrigger: {
			trigger: ".section3",
			start: () => "+=" + (height + 250),
			end: () => "+=" + 50,
			scrub: 1,
			markers: false,
		},
		fill: "#FFF4E6",
		ease : "none",
		duration: .3
	})
	gsap.from(".section3 .text-container .sticker", {
		scrollTrigger: {
			trigger: ".section3",
			start: () => "+=" + (height + 400),
			toggleActions: "play none none reverse",
			markers: false,
		},
		ease: Back.easeOut,
		scale: 0,
		stagger: .2,
		duration: .8,
	});

	var section4gap = 5*width/100,
		sec4marqueewidth = $(".section4 .marquee-content").width()+section4gap*2;
	$(".section4 .marquee-content").css('gap', ' ' + section4gap +  'px ');
	$(".section4 .marquee-content").css('padding-left', ' ' + section4gap/2 +  'px ');
	$(".section4 .marquee-content").css('padding-right', ' ' + section4gap/2 +  'px ');
	$(".section4 .marquee-content").css('left', ' ' + -sec4marqueewidth +  'px ');
	gsap.to(".section4 .marquee-content", {
		x: () => "+=" + sec4marqueewidth,
		repeat: -1,
		duration: 5,
		ease: "none"
	})
	gsap.to(".section4 .marquee-content img", {
		rotate: 360,
		repeat: -1,
		duration: 3,
		ease: "none"
	})
	const colors2s3 = ({
		trigger: ".section3",
		start: "top 30%",
		end: () => "+=" + 200,
		markers: false,
		scrub: .5,
	})
	const colors3s4 = ({
		trigger: ".section4",
		start: "top 30%",
		end: () => "+=" + 200,
		markers: false,
		scrub: .5,
	})
	gsap.fromTo('body', {
		background: "#FFF4E6",
	}, {
		scrollTrigger: {
			trigger: ".section5",
			start: "1% top",
			end: "99% bottom",
			markers: false,
			scrub: true,
		},
		background: "#151515",
	})
	gsap.fromTo('body', {
		background: "#151515",
	}, {
		scrollTrigger: colors3s4,
		background: "#FFF4E6",
	})
	gsap.fromTo('body', {
		background: "#FFF4E6"
	}, {
		scrollTrigger: colors2s3,
		background: "#151515"
	})

	gsap.to('.section2 .marquee-content p', {
		scrollTrigger: colors2s3,
		color: "#FFF4E6"
	})
	gsap.to(".section4", {
		scrollTrigger: colors3s4,
		color: "#151515",
	})

	gsap.to(".section5 .test-sticky-imgs", {
		scrollTrigger: {
			trigger: ".section5",
			start: "top top",
			end: "bottom bottom",
			pin: ".section5 .test-sticky-imgs",
			markers: false,
		},
	});
	gsap.from(".section5 .test-sticky-imgs-move", {
		scrollTrigger: {
			trigger: ".section5",
			start: "top bottom",
			end: "top top",
			scrub: 1,
			markers: false,
		},
		ease: Power2.out,
		y: () => "+=" + 25*height/100,
	});
	gsap.to(".section5 .test-sticky-imgs-zoom", {
		scrollTrigger: {
			trigger: ".section5",
			start: "top bottom",
			endTrigger: ".section6",
			end: "center center",
			scrub: 2,
			markers: false,
		},
		ease: "none",
		scale: 1,
	});

	gsap.from(".section5 .test-sticky-imgs img", {
		scrollTrigger: {
			trigger: ".section5",
			start: "top center",
			end: "top top",
			scrub: 1,
			markers: false,
		},
		filter: "brightness(1.1)"
	})
	gsap.to(".section5 .test-sticky-imgs .p1", {
		scrollTrigger: {
			trigger: ".section5 .content .curious",
			start: "center top",
			endTrigger: ".section5 .content .inspired",
			end: "top center",
			scrub: 1,
			markers: false,
		},
		opacity: 0,
	})
	gsap.to(".section5 .test-sticky-imgs .p2", {
		scrollTrigger: {
			trigger: ".section5 .content .inspired",
			start: "center top",
			endTrigger: ".section5 .content .focused",
			end: "top center",
			scrub: 1,
			markers: false,
		},
		opacity: 0,
	})


	var section6gap = 5*width/100,
		sec6marqueewidth = $(".section6 .marquee-content").width()+section6gap*2;
	$(".section6 .marquee-content").css('gap', ' ' + section6gap +  'px ');
	$(".section6 .marquee-content").css('padding-left', ' ' + section6gap/2 +  'px ');
	$(".section6 .marquee-content").css('padding-right', ' ' + section6gap/2 +  'px ');
	gsap.to(".section6 .marquee-content", {
		x: () => "+=" + -sec6marqueewidth,
		repeat: -1,
		duration: 6,
		ease: "none"
	})
	gsap.to(".section6 .marquee-content img", {
		rotate: -360,
		repeat: -1,
		duration: 3,
		ease: "none"
	})

	gsap.to('.footer .flower img', {
		rotate: 360,
		repeat: -1,
		duration: 3,
		ease: "none",
	})
}

function footersvg() {
	var width = $(window).innerWidth(),
		svgw = 3534.5,
		bigratio = 1.2,
		trueratio = 2.3;

	minus = svgw - width;
	half = minus/2;
	halfratio = half/svgw;
	var bla = 0;

	var svgwidth = $("#circle").width();
	if (width < 2000) {
		bla = width*trueratio;
		gsap.set("#circle", {
			width: bla
		})

		gsap.to(".footer .flower", {
			motionPath: {
				path: "#Path_179",
				align: "#Path_179",
				autoRotate: true,
				alignOrigin: [0.5, 0.5],
				start: halfratio*.9,
				end: 1-halfratio*.9,
			},
			ease: Power4.inOut,
			// yoyo: true,
			duration: bla/700,
			repeat: -1,
		})
	} else {
		bla = width*bigratio;
		gsap.set("#circle", {
			width: bla
		})

		gsap.to(".footer .flower", {
			motionPath: {
				path: "#Path_179",
				align: "#Path_179",
				autoRotate: true,
				alignOrigin: [0.5, 0.5],
				start: .05,
				end: .95,
			},
			ease: Power4.inOut,
			// yoyo: true,
			duration: bla/700,
			repeat: -1,
		})
	}
}

function sticker() {

	var scroll = $(window).scrollTop(),
		cx = window.innerWidth,
		cy = window.innerHeight;

	$(window).mousemove(function(event) {

		dx = event.pageX;
		dy = event.pageY - scroll;

		var ease = Power4.inOut,
			dur = .3;

		var rotatest1 = -21,
			st1h = $(".section3 .text-container .sticker1 svg").height(),
			st1w = $(".section3 .text-container .sticker1 svg").width(),
			st1t = $(".section3 .text-container .sticker1").offset().top - scroll,
			st1l = $(".section3 .text-container .sticker1").offset().left;
		sqrtst1 = (Math.sqrt(Math.pow(st1w, 2)+Math.pow(st1h, 2)));
		st1x = (st1w*Math.cos(rotatest1 * (Math.PI / 180))) + (st1h*Math.cos((90-rotatest1) * (Math.PI / 180))),
		testst1 = (Math.acos(st1w/sqrtst1)) * (180/Math.PI),
		st1y = sqrtst1*Math.sin(testst1);

		tiltxst1 = (dy-(st1t + st1y/2))/cy;
		tiltyst1 = -(dx - (st1l + st1x/2))/cx;
		radiusst1 = Math.sqrt(Math.pow(tiltxst1, 2) + Math.pow(tiltyst1, 2));
		constst1 = 60;
		degreest1 = constst1*radiusst1;
		gsap.to(".section3 .text-container .sticker1 svg", {
			transform: 'rotate3d(' + (constst1/2)*(tiltxst1) + ', ' + (constst1/2)*(tiltyst1) + ', 0, ' + degreest1 + 'deg)',
			ease: ease,
			duration: dur,
		});

		t1S1 = $(".section3 .text-container .sticker1 svg .art");
		t2S1 = $(".section3 .text-container .sticker1 svg .direction");
		s1S1 = $(".section3 .text-container .sticker1 svg .star1");
		s2S1 = $(".section3 .text-container .sticker1 svg .star2");
		gsap.to( t1S1, {
			x: 134.7 - tiltyst1*50,
			y: 75.61 + tiltxst1*50,
			ease: ease,
			duration: dur,
		});
		gsap.to( t2S1, {
			x: 74.82 - tiltyst1*30,
			y: 117.53 + tiltxst1*30,
			ease: ease,
			duration: dur,
		});
		gsap.to( s1S1, {
			x: -tiltyst1*60,
			y: tiltxst1*60,
			ease: ease,
			duration: dur,
		});
		gsap.to( s2S1, {
			x: -tiltyst1*20,
			y: tiltxst1*20,
			ease: ease,
			duration: dur,
		});
		
		var rotatest2 = 26,
			st2h = $(".section3 .text-container .sticker2 svg").height(),
			st2w = $(".section3 .text-container .sticker2 svg").width(),
			st2t = $(".section3 .text-container .sticker2").offset().top - scroll,
			st2l = $(".section3 .text-container .sticker2").offset().left;
		sqrtst2 = (Math.sqrt(Math.pow(st2w, 2)+Math.pow(st2h, 2)));
		st2x = (st2w*Math.cos(rotatest2 * (Math.PI / 180))) + (st2h*Math.cos((90-rotatest2) * (Math.PI / 180))),
		testst2 = (Math.acos(st2w/sqrtst2)) * (180/Math.PI),
		st2y = sqrtst2*Math.sin(testst2);

		tiltxst2 = (dy-(st2t + st2y/2))/cy;
		tiltyst2 = -(dx - (st2l + st2x/2))/cx;
		radiusst2 = Math.sqrt(Math.pow(tiltxst2, 2) + Math.pow(tiltyst2, 2));
		constst2 = 60;
		degreest2 = constst2*radiusst2;
		gsap.to(".section3 .text-container .sticker2 svg", {
			transform: 'rotate3d(' + (constst2/2)*(tiltxst2) + ', ' + (constst2/2)*(tiltyst2) + ', 0, ' + degreest2 + 'deg)',
			ease: ease,
			duration: dur,
		});

		t1S2 = $(".section3 .text-container .sticker2 svg .visualdesign");
		s1S2 = $(".section3 .text-container .sticker2 svg .star1");
		s2S2 = $(".section3 .text-container .sticker2 svg .star2");
		stroke1S2 = $(".section3 .text-container .sticker2 svg .WStroke");
		gsap.to( t1S2, {
			x: 44.8 - tiltyst2*20,
			y: 57.29 + tiltxst2*20,
			ease: ease,
			duration: dur,
		});
		gsap.to( s1S2, {
			x: -tiltyst2*35,
			y: tiltxst2*35,
			ease: ease,
			duration: dur,
		});
		gsap.to( s2S2, {
			x: -tiltyst2*15,
			y: tiltxst2*15,
			ease: ease,
			duration: dur,
		});
		gsap.to( stroke1S2, {
			x: -tiltyst2*5,
			y: tiltxst2*5,
			ease: ease,
			duration: dur,
		});


		var rotatest3 = 14,
			st3h = $(".section3 .text-container .sticker3 svg").height(),
			st3w = $(".section3 .text-container .sticker3 svg").width(),
			st3t = $(".section3 .text-container .sticker3").offset().top - scroll,
			st3l = $(".section3 .text-container .sticker3").offset().left;
		sqrtst3 = (Math.sqrt(Math.pow(st3w, 2)+Math.pow(st3h, 2)));
		st3x = (st3w*Math.cos(rotatest3 * (Math.PI / 180))) + (st3h*Math.cos((90-rotatest3) * (Math.PI / 180))),
		testst3 = (Math.acos(st3w/sqrtst3)) * (180/Math.PI),
		st3y = sqrtst3*Math.sin(testst3);

		tiltxst3 = (dy-(st3t + st3y/2))/cy;
		tiltyst3 = -(dx - (st3l + st3x/2))/cx;
		radiusst3 = Math.sqrt(Math.pow(tiltxst3, 2) + Math.pow(tiltyst3, 2));
		constst3 = 60;
		degreest3 = constst3*radiusst3;
		gsap.to(".section3 .text-container .sticker3 svg", {
			transform: 'rotate3d(' + (constst3/2)*(tiltxst3) + ', ' + (constst3/2)*(tiltyst3) + ', 0, ' + degreest3 + 'deg)',
			ease: ease,
			duration: dur,
		});

		t1S3 = $(".section3 .text-container .sticker3 svg .graphic");
		t2S3 = $(".section3 .text-container .sticker3 svg .design");
		s1S3 = $(".section3 .text-container .sticker3 svg .star1");
		gsap.to( t1S3, {
			x: -tiltyst3*30,
			y: tiltxst3*30,
			ease: ease,
			duration: dur,
		});
		gsap.to( t2S3, {
			x: -tiltyst3*15,
			y: tiltxst3*15,
			ease: ease,
			duration: dur,
		});
		gsap.to( s1S3, {
			x: -tiltyst3*50,
			y: tiltxst3*50,
			ease: ease,
			duration: dur,
		});

		var rotatest4 = -25,
			st4h = $(".section3 .text-container .sticker4 svg").height(),
			st4w = $(".section3 .text-container .sticker4 svg").width(),
			st4t = $(".section3 .text-container .sticker4").offset().top - scroll,
			st4l = $(".section3 .text-container .sticker4").offset().left;
		sqrtst4 = (Math.sqrt(Math.pow(st4w, 2)+Math.pow(st4h, 2)));
		st4x = (st4w*Math.cos(rotatest4 * (Math.PI / 180))) + (st4h*Math.cos((90-rotatest4) * (Math.PI / 180))),
		testst4 = (Math.acos(st4w/sqrtst4)) * (180/Math.PI),
		st4y = sqrtst4*Math.sin(testst4);

		tiltxst4 = (dy-(st4t + st4y/2))/cy;
		tiltyst4 = -(dx - (st4l + st4x/2))/cx;
		radiusst4 = Math.sqrt(Math.pow(tiltxst4, 2) + Math.pow(tiltyst4, 2));
		constst4 = 60;
		degreest4 = constst4*radiusst4;
		gsap.to(".section3 .text-container .sticker4 svg", {
			transform: 'rotate3d(' + (constst4/2)*(tiltxst4) + ', ' + (constst4/2)*(tiltyst4) + ', 0, ' + degreest4 + 'deg)',
			ease: ease,
			duration: dur,
		});

		t1S4 = $(".section3 .text-container .sticker4 svg .brand");
		t2S4 = $(".section3 .text-container .sticker4 svg .identity");
		s1S4 = $(".section3 .text-container .sticker4 svg .star1");
		s2S4 = $(".section3 .text-container .sticker4 svg .star2");
		gsap.to( s1S4, {
			x: -tiltyst4*15,
			y: tiltxst4*15,
			ease: ease,
			duration: dur,
		});
		gsap.to( t1S4, {
			x: 101.79 - tiltyst4*30,
			y: 75.51 + tiltxst4*30,
			ease: ease,
			duration: dur,
		});
		gsap.to( t2S4, {
			x: 90.32 - tiltyst4*40,
			y: 109.57 + tiltxst4*40,
			ease: ease,
			duration: dur,
		});
		gsap.to( s2S4, {
			x: -tiltyst4*20,
			y: tiltxst4*20,
			ease: ease,
			duration: dur,
		});



		var rotatest5 = 23,
			st5h = $(".section3 .text-container .sticker5 svg").height(),
			st5w = $(".section3 .text-container .sticker5 svg").width(),
			st5t = $(".section3 .text-container .sticker5").offset().top - scroll,
			st5l = $(".section3 .text-container .sticker5").offset().left;
		sqrtst5 = (Math.sqrt(Math.pow(st5w, 2)+Math.pow(st5h, 2)));
		st5x = (st5w*Math.cos(rotatest5 * (Math.PI / 180))) + (st5h*Math.cos((90-rotatest5) * (Math.PI / 180))),
		testst5 = (Math.acos(st5w/sqrtst5)) * (180/Math.PI),
		st5y = sqrtst5*Math.sin(testst5);

		tiltxst5 = (dy-(st5t + st5y/2))/cy;
		tiltyst5 = -(dx - (st5l + st5x/2))/cx;
		radiusst5 = Math.sqrt(Math.pow(tiltxst5, 2) + Math.pow(tiltyst5, 2));
		constst5 = 60;
		degreest5 = constst5*radiusst5;
		gsap.to(".section3 .text-container .sticker5 svg", {
			transform: 'rotate3d(' + (constst5/2)*(tiltxst5) + ', ' + (constst5/2)*(tiltyst5) + ', 0, ' + degreest5 + 'deg)',
			ease: ease,
			duration: dur,
		});

		t1S5 = $(".section3 .text-container .sticker5 svg .ui");
		t2S5 = $(".section3 .text-container .sticker5 svg .design");
		s1S5 = $(".section3 .text-container .sticker5 svg .star1");
		s2S5 = $(".section3 .text-container .sticker5 svg .star2");
		instrokeS5 = $(".section3 .text-container .sticker5 svg .In_Stroke");
		gsap.to( t1S5, {
			x: 153.95 - tiltyst5*50,
			y: 99.22 + tiltxst5*50,
			ease: ease,
			duration: dur,
		});
		gsap.to( t2S5, {
			x: 81.88 - tiltyst5*30,
			y: 147.96 + tiltxst5*30,
			ease: ease,
			duration: dur,
		});
		gsap.to( s1S5, {
			x: -tiltyst5*20,
			y: tiltxst5*20,
			ease: ease,
			duration: dur,
		});
		gsap.to( s2S5, {
			x: -tiltyst5*35,
			y: tiltxst5*35,
			ease: ease,
			duration: dur,
		});
		gsap.to( instrokeS5, {
			x: -tiltyst5*15,
			y: tiltxst5*15,
			ease: ease,
			duration: dur,
		});

		var rotatest6 = -35,
			st6h = $(".section3 .text-container .sticker6 svg").height(),
			st6w = $(".section3 .text-container .sticker6 svg").width(),
			st6t = $(".section3 .text-container .sticker6").offset().top - scroll,
			st6l = $(".section3 .text-container .sticker6").offset().left;
		sqrtst6 = (Math.sqrt(Math.pow(st6w, 2)+Math.pow(st6h, 2)));
		st6x = (st6w*Math.cos(rotatest6 * (Math.PI / 180))) + (st6h*Math.cos((90-rotatest6) * (Math.PI / 180))),
		testst6 = (Math.acos(st6w/sqrtst6)) * (180/Math.PI),
		st6y = sqrtst6*Math.sin(testst6);

		tiltxst6 = (dy-(st6t + st6y/2))/cy;
		tiltyst6 = -(dx - (st6l + st6x/2))/cx;
		radiusst6 = Math.sqrt(Math.pow(tiltxst6, 2) + Math.pow(tiltyst6, 2));
		constst6 = 60;
		degreest6 = constst6*radiusst6;
		gsap.to(".section3 .text-container .sticker6 svg", {
			transform: 'rotate3d(' + (constst6/2)*(tiltxst6) + ', ' + (constst6/2)*(tiltyst6) + ', 0, ' + degreest6 + 'deg)',
			ease: ease,
			duration: dur,
		});

		t1S6 = $(".section3 .text-container .sticker6 svg .hand");
		t2S6 = $(".section3 .text-container .sticker6 svg .drawing");
		s1S6 = $(".section3 .text-container .sticker6 svg .star1");
		gsap.to( t1S6, {
			x: -tiltyst6*15,
			y: tiltxst6*15,
			ease: ease,
			duration: dur,
		});
		gsap.to( s1S6, {
			x: -tiltyst6*35,
			y: tiltxst6*35,
			ease: ease,
			duration: dur,
		});
		gsap.to( t2S6, {
			x: 22.89 - tiltyst6*20,
			y: 175.6 + tiltxst6*20,
			ease: ease,
			duration: dur,
		});
		

	});
}

window.addEventListener("resize", () => {
	footersvg();
});


window.addEventListener('load', function() {
	index();
	footersvg();
	sticker();
});