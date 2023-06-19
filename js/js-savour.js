function workSavour() {
	var width = $(window).innerWidth(),
		height = $(window).innerHeight();

	gsap.defaults({ease: "none",duration: 2});

	s1h = $('.section1 .big-logo').innerHeight() + $('.section1 .under-logo').innerHeight();
	pad = (height-s1h)/2;

	$('.section1').css('paddingTop', ' ' + pad + 'px');
	$('.section1').css('paddingBottom', ' ' + pad + 'px');

	gsap.from('.section1 .big-logo', {
		y: 100,
		opacity: 0,
		ease: Power3.easeOut,
		duration: 2,
		delay: 1,
	})
	gsap.to('.section1', {
		scrollTrigger: {
			trigger: '.section1',
			start: 'top top',
			end: 'bottom top',
			scrub: true,
			markers: false
		},
		y: 300,
	})
	gsap.to('.section2 .image1', {
		scrollTrigger: {
			trigger: '.section1',
			start: 'top top',
			endTrigger: '.section2',
			end: 'bottom top',
			scrub: true,
			markers: false
		},
		y: 200,
	})
	gsap.to('.section2 .image3', {
		scrollTrigger: {
			trigger: '.section1',
			start: 'top top',
			endTrigger: '.section2',
			end: 'bottom top',
			scrub: true,
			markers: false
		},
		y: -100,
	})
	gsap.to('.section2 .image4', {
		scrollTrigger: {
			trigger: '.section1',
			start: 'top top',
			endTrigger: '.section2',
			end: 'bottom top',
			scrub: true,
			markers: false
		},
		y: 50,
	})
	gsap.to('.section2 .image5', {
		scrollTrigger: {
			trigger: '.section1',
			start: 'top top',
			endTrigger: '.section2',
			end: 'bottom top',
			scrub: true,
			markers: true
		},
		y: 100,
	})
	gsap.to('.section2 .text', {
		scrollTrigger: {
			trigger: '.section1',
			start: 'top top',
			endTrigger: '.section2',
			end: 'bottom top',
			scrub: true,
			markers: false
		},
		y: 50,
	})
	gsap.to('.section3 video', {
		scrollTrigger: {
			trigger: '.section3',
			start: 'top top',
			end: 'bottom top',
			scrub: true,
			markers: true
		},
		y: 80,
	})
}


window.addEventListener('load', function() {
	workSavour();

	var sec2img1 = document.getElementById('image1');
	var sec2img1Parallax = new Parallax(sec2img1, {
		relativeInput: true
	});
	var sec2img2 = document.getElementById('image2');
	var sec2img2Parallax = new Parallax(sec2img2, {
		relativeInput: true
	});
	var sec2img3 = document.getElementById('image3');
	var sec2img3Parallax = new Parallax(sec2img3, {
		relativeInput: true
	});
	var sec2img4 = document.getElementById('image4');
	var sec2img4Parallax = new Parallax(sec2img4, {
		relativeInput: true
	});
	var sec2img5 = document.getElementById('image5');
	var sec2img5Parallax = new Parallax(sec2img5, {
		relativeInput: true
	});
	
	sec2img1Parallax.friction(0.2, 0.2);
	sec2img2Parallax.friction(0.2, 0.2);
	sec2img3Parallax.friction(0.2, 0.2);
	sec2img4Parallax.friction(0.2, 0.2);
	sec2img5Parallax.friction(0.2, 0.2);
})