function work() {
	let width = $(window).innerWidth(),
		padding = 5 * width / 100;

	gsap.defaults({ ease: "none", duration: 2 });


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
	gsap.to('.section1 .ground .head.o', {
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

	let sc1sc2 = ({
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

	gsap.from('.section2 .sticky-container', {
		scrollTrigger: {
			trigger: ' .section2',
			start: 'top bottom',
			end: '200px center',
			scrub: true,
		},
		y: -200,
		ease: "power1.out",
	})

	let marqueeGap = 180,
		distanceGap = marqueeGap * 2 / 3;

	let sst1 = $(".section2 .stkmarquee1 .marquee-content").width() + distanceGap,
		tst1 = 10;

	let ratio1 = tst1 / sst1;

	const fillMarquee = $('.section2 .content-container.fill-text .marquee-container')
	const strokeMarquee = $('.section2 .content-container.stroke-text .marquee-container')

	$('.section2 .sticky-container .sticky-text .stroke-text .marquee-container').css('right', ' ' + sst1 * 1.5 + 'px');

	let tlFill = [],
		tlStroke = [];

	fillMarquee.each((__, el) => {
		const tl = gsap.timeline(
			// { paused: true }
		);
		tl.to($(el).find(".marquee-content"), {
			x: () => "+=" + -($(el).find(".marquee-content").width() + distanceGap),
			repeat: -1,
			duration: ($(el).find(".marquee-content").width() + distanceGap) * ratio1,
		})

		tlFill.push(tl)
	})

	strokeMarquee.each((__, el) => {
		const tl = gsap.timeline(
			// { paused: true }
		);
		tl.to($(el).find(".marquee-content"), {
			x: () => "+=" + ($(el).find(".marquee-content").width() + distanceGap),
			repeat: -1,
			duration: ($(el).find(".marquee-content").width() + distanceGap) * ratio1,
		})

		tlStroke.push(tl)
	})

	const allTextSub = $(".section2 .sticky-container .text-container .text p")

	allTextSub.each((idx, el) => {
		idx !== 0 && gsap.set(el, {
			yPercent: 100
		})
	})

	const allThumb = $(".section2 .thumb-container .content")

	allThumb.each((idx, el) => {
		const aTag = $(el).find('a')

		ScrollTrigger.create({
			trigger: aTag,
			start: 'top center',
			end: 'bottom-=30% center',

			onEnter: () => {
				gsap.to(allTextSub[idx], {
					yPercent: 0,
					duration: .3,
					ease: "power4.out",
					overwrite: true,
				})
				idx !== 0 && gsap.to(allTextSub[idx - 1], {
					yPercent: -100,
					duration: .3,
					ease: "power4.out",
					overwrite: true,
				})
			},
			onEnterBack: () => {
				gsap.to(allTextSub[idx], {
					yPercent: 0,
					duration: .3,
					ease: "power4.out",
					overwrite: true,
				})
				idx !== allThumb.length && gsap.to(allTextSub[idx + 1], {
					yPercent: -100,
					duration: .3,
					ease: "power4.out",
					overwrite: true,
				})
			}
		})

		if (idx !== 0) {
			const tlChangeTitle = gsap.timeline({
				scrollTrigger: {
					trigger: allThumb.eq(idx - 1).find('a'),
					start: 'bottom center',
					endTrigger: aTag,
					end: 'top center',
					scrub: true,
				}
			})

			tlChangeTitle.fromTo('.marquee-container', {
				yPercent: (idx - 1) * -100,
			}, {
				yPercent: idx * -100,
				ease: 'none'
			})
		}
		gsap.set('.marquee-container', {
			yPercent: 0
		})
	})
}

window.addEventListener('load', () => {
	work();

	window.addEventListener('resize', () => {
		work();
	})
})