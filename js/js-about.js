width = $(window).innerWidth(),
height = $(window).innerHeight();

movetext = $('.move-text').innerHeight();
first = $('.first').innerHeight();

document.documentElement.style.setProperty("--r",  "2.5vw");

$('.section1 .move-text').css('marginTop', ' ' + height - (first + movetext + .3*height) + 'px ');


function germ() {
	var imgw = $(".section2 .img").innerWidth(),
		imgh = $(".section2 .img").innerHeight(),
		gleft = $('#germleft'),
		gright = $('#germright'),
		cb = $('.chatbox');

	gleft.css('top', ' ' + .5*imgh + 'px ');
	gleft.css('left', ' ' + .49*imgw + 'px ');
	gright.css('top', ' ' + .505*imgh + 'px ');
	gright.css('left', ' ' + .555*imgw + 'px ');
	
	gsap.set(cb, {
		x: .43*imgw,
		y: .38*imgh,
	})

	var section4gap = 5*width/100,
		sec6marqueewidth = $(".section4 .marquee-content").width()+section4gap*2;
	$(".section4 .marquee-content").css('gap', ' ' + section4gap +  'px ');
	$(".section4 .marquee-content").css('padding-left', ' ' + section4gap/2 +  'px ');
	$(".section4 .marquee-content").css('padding-right', ' ' + section4gap/2 +  'px ');
	gsap.to(".section4 .marquee-content", {
		x: () => "+=" + -sec6marqueewidth,
		repeat: -1,
		duration: 6,
		ease: "none"
	})
	gsap.to(".section4 .marquee-content img", {
		rotate: -360,
		repeat: -1,
		duration: 3,
		ease: "none"
	})
}

function fun() {
	width = $(window).innerWidth(),
	height = $(window).innerHeight(),
	sc = $(window).scrollTop();

var gleft = $('#germleft'),
	plus = gleft.innerWidth()/2,
	germl = $('#germleft .black-germ'),
	germr = $('#germright .black-germ');

	dx = event.pageX;
	dy = event.pageY-sc;
	x0 = (width/2 + .02*width);
	y0 = $(".section2").offset().top + $(".section2").innerHeight()/2 - sc;
	minus = (gleft.innerWidth() - germl.innerWidth())/2;

	xgleft = $('#germleft').offset().left + $('#germleft').innerWidth()/2;
	ygleft = $('#germleft').offset().top + $('#germleft').innerHeight()/2;
	xgright = $('#germright').offset().left + $('#germright').innerWidth()/2;
	ygright = $('#germright').offset().top + $('#germright').innerHeight()/2;

	x = (dx - x0)/x0;
	y = (dy - y0)/y0;

	if (x <= 1 && y <= 1) {
		germl.css('top', ' ' + (y*minus+plus) + 'px');
		germl.css('left', ' ' + (x*minus+plus) + 'px');
		germr.css('top', ' ' + (y*minus+plus) + 'px');
		germr.css('left', ' ' + (x*minus+plus) + 'px');
	}
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
			ease: "none",
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
			ease: "none",
			// yoyo: true,
			duration: bla/700,
			repeat: -1,
		})
	}

	gsap.to(".footer .flower img", {
		rotate: 360,
		ease: "none",
		duration: 1,
		repeat: -1,
	})
}

$(window).mousemove(function(event) {
	fun()
})
window.addEventListener('load', function() {
	germ();
	footersvg();

	gsap.to('.section1 .move-text', {
		scrollTrigger: {
			end: () => + 600,
			scrub: 1,
			markers: false,
		},
		y: 200,
		ease: 'none'
	})
	gsap.to('.section3 p', {
		scrollTrigger: {
			trigger: '.section3',
			start: 'top top',
			end: 'bottom top',
			scrub: 1,
			markers: false,
		},
		y: 350,
		ease: 'none'
	})
})

window.addEventListener('resize', function() {
	germ();
	footersvg();
})