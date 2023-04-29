function work() {
	var width = $(window).innerWidth(),
		height = $(window).innerHeight(),
		padding = 5*width/100;

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

	const sc2head = 180,
		sc2time = sc2head/2,
		sc2mq = $(".section2 .sticky-container .marquee-container"),
		sc2start = "top 50%",
		sc2end = "bottom 65%",
		sc2scrub = 1,
		sc2maker = false,
		sc2ease = "Power3.inOut";


	gsap.timeline().to(sc2mq, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .olipop span",
			start: sc2start,
			end: sc2end,
			scrub: sc2scrub,
		},
		y: () => "+=" + -(sc2head),
		ease : sc2ease,
	}).fromTo(sc2mq, {
		y: () => "+=" + -(sc2head),
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .savour span",
			start: sc2start,
			end: sc2end,
			scrub: sc2scrub,
		},
		y: () => "+=" + -(sc2head),
		ease : sc2ease,
	}).fromTo(sc2mq, {
		y: () => "+=" + -(sc2head),
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .proE span",
			start: sc2start,
			end: sc2end,
			scrub: sc2scrub,
		},
		y: () => "+=" + -(sc2head),
		ease : sc2ease,
	})
	gsap.set(sc2mq, {
		y: 0
	})

	var sc2textout = .5,
		sc2text1 = $(".section2 .sticky-container .content-container .text1"),
		sc2text1p = sc2text1.children("p"),
		sc2text2 = $(".section2 .sticky-container .content-container .text2"),
		sc2text2p = sc2text2.children("p"),
		sc2text3 = $(".section2 .sticky-container .content-container .text3"),
		sc2text3p = sc2text3.children("p"),
		sc2text4 = $(".section2 .sticky-container .content-container .text4"),
		sc2text4p = sc2text4.children("p"),
		sc2textmove = sc2text1.width() + padding,
		sc2textstart = "bottom 55%",
		sc2textend = () => "+=" + 20;
		console.log(sc2text1.width() + padding)

	gsap.timeline().fromTo(sc2text3p, {
		xPercent: 0
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .proE span",
			start: sc2textstart,
			end: sc2textend,
			scrub: true,
		},
		xPercent: -100
	}).fromTo(sc2text4p, {
		x: () => "+=" + (-sc2textmove),
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .proE span",
			start: sc2textstart,
			end: sc2textend,
			scrub: 1,
		},
		x: 0
	}).fromTo(sc2text2p, {
		xPercent: 0,
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .savour span",
			start: sc2textstart,
			end: sc2textend,
			scrub: true,
		},
		xPercent: 100
	}).fromTo(sc2text3p, {
		x: () => "+=" + (sc2textmove),
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .savour span",
			start: sc2textstart,
			end: sc2textend,
			scrub: 1,
		},
		x: 0
	}).fromTo(sc2text1p, {
		xPercent: 0,
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .olipop span",
			start: sc2textstart,
			end: sc2textend,
			scrub: true,
		},
		xPercent: -100
	}).fromTo(sc2text2p, {
		x: () => "+=" + (-sc2textmove),
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .olipop span",
			start: sc2textstart,
			end: sc2textend,
			scrub: 1,
		},
		x: 0
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
		t1 = 8,
		tf2 = (sf2*t1)/s1,
		tf3 = (sf3*t1)/s1,
		tf4 = (sf4*t1)/s1,
		tst1 = (sst1*t1)/s1,
		tst2 = (sst2*t1)/s1,
		tst3 = (sst3*t1)/s1;

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