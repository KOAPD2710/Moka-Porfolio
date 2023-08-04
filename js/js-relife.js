function reLife() {
	gsap.defaults({ease: "none",duration: 2});

	gsap.to(".section1 .intro video", {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "bottom top",
			scrub: 1,
			markers: true
		},
		yPercent: 30,
	})

	gsap.from(".section3 .problem .problem1", {
		scrollTrigger: {
			trigger: ".section3 .problem .problem1",
			toggleActions: "restart none none none",
		},
		x: -200,
		duration: 4,
		ease: 'Power4.easeOut'
	})
	gsap.from(".section3 .problem .problem2", {
		scrollTrigger: {
			trigger: ".section3 .problem .problem1",
			toggleActions: "restart none none none",
		},
		x: 200,
		duration: 4,
		ease: 'Power4.easeOut'
	})

	gsap.to(".section3 .problem .problem1 img", {
		scrollTrigger: {
			trigger: ".section3 h2",
			start: "top bottom",
			endTrigger: ".section3 .problem",
			end: "bottom top",
			scrub: 1.5,
			markers: false,
		},
		x: 300
	})
	gsap.to(".section3 .problem .problem2 img", {
		scrollTrigger: {
			trigger: ".section3 h2",
			start: "top bottom",
			endTrigger: ".section3 .problem",
			end: "bottom top",
			scrub: 1.5,
			markers: false,
		},
		x: -300
	})


	var s3height = $('.section3').innerHeight();
	gsap.set(".section23Curtain", {
		height: s3height - 100
	})

	gsap.to(".section23Curtain", {
		scrollTrigger: {
			trigger: ".section23Curtain",
		},
		height: 3000,
		duration: 2,
		ease: "Power2.easeIn"
	})
	gsap.to("#flower", {
		scrollTrigger: {
			trigger: ".section23Curtain",
		},
		fill: '#FFF4E6',
		duration: 2,
		ease: "Power2.easeIn"
	})
	gsap.to(".section2", {
		scrollTrigger: {
			trigger: ".section23Curtain",
		},
		color: '#FFF4E6',
		duration: 2,
		ease: "Power2.easeIn"
	})
}

window.addEventListener("resize", () => {
});


window.addEventListener('load', function() {
	reLife();
});