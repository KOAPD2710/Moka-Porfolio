function reLife() {
	gsap.defaults({ease: "none",duration: 2});

	gsap.to(".section1 .intro video", {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "bottom top",
			scrub: 1,
			markers: false,
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
	gsap.from(".section6 .s6-d1", {
		scrollTrigger: {
			trigger: ".section6 .s6-d1",
			start: "top bottom",
			// toggleActions: "restart none none none",
		},
		opacity: 0,
		x: 300,
		ease: "Power4.easeOut"
	})
	gsap.from(".section6 .s6-d2", {
		scrollTrigger: {
			trigger: ".section6 .s6-d2",
			start: "-20px bottom",
			// toggleActions: "restart none none none",
		},
		opacity: 0,
		x: 300,
		ease: "Power2.easeOut"
	})
	gsap.to(".section6 img", {
		scrollTrigger: {
			trigger: ".section6",
			start: "top bottom",
			end: "bottom top",
			scrub: 2,
		},
		x: 300
	})
	gsap.to(".section7 img", {
		scrollTrigger: {
			trigger: ".section7",
			start: "top bottom",
			end: "bottom top",
			scrub: 1,
		},
		yPercent: -20
	})

}

window.addEventListener("resize", () => {
});


window.addEventListener('load', function() {
	reLife();
});