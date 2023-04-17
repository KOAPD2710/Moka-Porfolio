function work() {
	var width = $(window).innerWidth(),
		height = $(window).innerHeight();

	gsap.defaults({ease: "none",duration: 2});


	gsap.to('.section1 .play-text .head.p', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 1.5,
			markers: false,
		},
		x: () => "+=" + width
	})
	gsap.to('.section1 .play-text .head.l', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 1.8,
			markers: false,
		},
		x: () => "+=" + width
	})
	gsap.to('.section1 .play-text .head.a', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 2.1,
			markers: false,
		},
		x: () => "+=" + width
	})
	gsap.to('.section1 .play-text .head.y', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 1.9,
			markers: false,
		},
		x: () => "+=" + width
	})
	gsap.to('.section1 .ground .head.g', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 2.25,
			markers: false,
		},
		x: () => "+=" + -width
	})
	gsap.to('.section1 .ground .head.r', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 2.1,
			markers: false,
		},
		x: () => "+=" + -width
	})
	gsap.to('.section1 .ground .head.nav', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 1.9,
			markers: false,
		},
		x: () => "+=" + -width
	})
	gsap.to('.section1 .ground .head.u', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 1.75,
			markers: false,
		},
		x: () => "+=" + -width
	})
	gsap.to('.section1 .ground .head.n', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 1.9,
			markers: false,
		},
		x: () => "+=" + -width
	})
	gsap.to('.section1 .ground .head.d', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 2.1,
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
		end: () => "+=" + 50,
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

	var sc2head = 180,
		sc2time = sc2head/2,
		sc2mq = $(".section2 .sticky-container .marquee-container"),
		sc2timemq = $(".section2 .sticky-container .content-container .text"),
		sc2start = "top 50%",
		sc2end = "bottom 65%",
		sc2timestart = "bottom 60%",
		sc2timeend = () => "+=" + 100,
		sc2scrub = 1,
		sc2timescrub = 1.5,
		sc2maker = true;

	gsap.timeline().to(sc2mq, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .olipop span",
			start: sc2start,
			end: sc2end,
			scrub: sc2scrub,
			// markers: sc2maker,
		},
		y: () => "+=" + -(sc2head),
	}).to(sc2timemq, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .olipop span",
			start: sc2timestart,
			end: sc2timeend,
			scrub: sc2timescrub,
			markers: sc2maker,
		},
		y: () => "+=" + -(sc2time),
	}).fromTo(sc2mq, {
		y: () => "+=" + -(sc2head),
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .savour span",
			start: sc2start,
			end: sc2end,
			scrub: sc2scrub,
			// markers: sc2maker,
		},
		y: () => "+=" + -(sc2head),
	}).fromTo(sc2timemq, {
		y: () => "+=" + -(sc2time),
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .savour span",
			start: sc2timestart,
			end: sc2timeend,
			scrub: sc2timescrub,
			// markers: sc2maker,
		},
		y: () => "+=" + -(sc2time),
	}).fromTo(sc2mq, {
		y: () => "+=" + -(sc2head),
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .proE span",
			start: sc2start,
			end: sc2end,
			scrub: sc2scrub,
			// markers: sc2maker,
		},
		y: () => "+=" + -(sc2head),
	}).fromTo(sc2timemq, {
		y: () => "+=" + -(sc2time),
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .proE span",
			start: sc2timestart,
			end: sc2timeend,
			scrub: sc2timescrub,
			// markers: sc2maker,
		},
		y: () => "+=" + -(sc2time),
	})
};

function marquee() {
	var mqgap = 180,
		mqless = mqgap*2/3,
		width = $(window).innerWidth(),
		height = $(window).innerHeight();

	var s1 = $(".section2 .olipop .marquee-content").width()+mqless,
		sf2 = $(".section2 .savour .marquee-content").width()+mqless,
		sf3 = $(".section2 .proE .marquee-content").width()+mqless,
		sf4 = $(".section2 .diary .marquee-content").width()+mqless,
		sst1 = $(".section2 .banner .marquee-content").width()+mqless,
		sst2 = $(".section2 .website .marquee-content").width()+mqless,
		sst3 = $(".section2 .app .marquee-content").width()+mqless,
		t1 = 5,
		tf2 = (sf2*t1)/s1,
		tf3 = (sf3*t1)/s1,
		tf4 = (sf4*t1)/s1,
		tst1 = (sst1*t1)/s1,
		tst2 = (sst2*t1)/s1,
		tst3 = (sst3*t1)/s1;

		console.log(s1)

	gsap.to(".section2 .olipop .marquee-content", {
		x: () => "+=" + -(s1),
		repeat: -1,
		duration: t1,
		ease: "none",
	})
	gsap.to(".section2 .savour .marquee-content", {
		x: () => "+=" + -(sf2),
		repeat: -1,
		duration: tf2,
		ease: "none",
	})
	gsap.to(".section2 .proE .marquee-content", {
		x: () => "+=" + -(sf3),
		repeat: -1,
		duration: tf3,
		ease: "none",
	})
	gsap.to(".section2 .diary .marquee-content", {
		x: () => "+=" + -(sf4),
		repeat: -1,
		duration: tf4,
		ease: "none",
	})
	gsap.to(".section2 .banner .marquee-content", {
		x: () => "+=" + (sst1),
		repeat: -1,
		duration: tst1,
		ease: "none",
	})
	gsap.to(".section2 .website .marquee-content", {
		x: () => "+=" + (sst2),
		repeat: -1,
		duration: tst2,
		ease: "none",
	})
	gsap.to(".section2 .app .marquee-content", {
		x: () => "+=" + (sst3),
		repeat: -1,
		duration: tst3,
		ease: "none",
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


	



