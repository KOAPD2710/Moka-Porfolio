function work() {
	var width = $(window).innerWidth(),
		height = $(window).innerHeight();

	gsap.defaults({ease: "none",duration: 2});

	gsap.to(".project .project-sticky-text", {
		scrollTrigger: {
			trigger: ".project-sticky-text",
			start: "center center",
			endTrigger: ".project",
			end: "bottom bottom",
			pin: ".project .project-sticky-text",
			markers: true,
			id: "project-sticky-text",
		}
	})

	// const marquee = -240;
	// var texttl1 = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: ".test .showreel-container .showreel1",
	// 		start: "bottom center",
	// 		end: "bottom top",
	// 		scrub: true,
	// 		markers: false,
	// 		id: "sticky-text-div",
	// 	},
	// });
	// var texttl2 = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: ".test .showreel-container .showreel2",
	// 		start: "bottom center",
	// 		end: "bottom top",
	// 		scrub: true,
	// 		markers: false,
	// 		id: "sticky-text-div",
	// 	},
	// });
	// var texttl3 = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: ".test .showreel-container .showreel3",
	// 		start: "bottom center",
	// 		end: "bottom top",
	// 		scrub: true,
	// 		markers: false,
	// 		id: "sticky-text-div",
	// 	},
	// });
	// texttl1.to(".test .test-sticky-text .text",{
	// 	y: "+=-240",
	// });
	// texttl2.to(".test .test-sticky-text .text", {	
	// 	y: "+=-240",
	// });
	// texttl3.to(".test .test-sticky-text .text", {	
	// 	y: "+=-240",
	// });

	// var textmove = ($(".test .test-sticky-text .text-fill .text1 h3").width()*$(".test .test-sticky-text .text-fill .text1 h3").length - 50*vw);
	// var trigger1 = ({
	// 		trigger: ".test .test-sticky-text .text-fill .text1",
	// 		start: "top bottom",
	// 		endTrigger: ".test .showreel-container .showreel2",
	// 		end: "bottom bottom",
	// 		scrub: 1,
	// 		markers: false,
	// 		id: "sticky-text-1",
	// });
	// var trigger2 = ({
	// 		trigger: ".test .showreel-container .showreel1",
	// 		start: "bottom center",
	// 		endTrigger: ".test .showreel-container .showreel2",
	// 		end: "bottom top",
	// 		scrub: 1,
	// 		markers: false,
	// 		id: "sticky-text-2",
	// });
	// var trigger3 = ({
	// 		trigger: ".test .showreel-container .showreel2",
	// 		start: "bottom center",
	// 		endTrigger: ".test .showreel-container .showreel3",
	// 		end: "bottom top",
	// 		scrub: 1,
	// 		markers: false,
	// 		id: "sticky-text-3",
	// });
	// var triggerlast = ({
	// 		trigger: ".test .showreel-container .showreel3",
	// 		start: "top bottom",
	// 		endTrigger: ".test",
	// 		end: "bottom top",
	// 		scrub: 1,
	// 		markers: false,
	// 		id: "sticky-text-4",
	// });
	// gsap.timeline().to(".test .test-sticky-text .text-fill .text1 h3",{
	// 	scrollTrigger: trigger1,
	// 	x: () => "+=" + -textmove,
	// }).to(".test .test-sticky-text .text-stroke .text1 h3",{
	// 	scrollTrigger: trigger1,
	// 	x: () => "+=" + textmove,
	// });
	// gsap.timeline().to(".test .test-sticky-text .text-fill .text2 h3",{
	// 	scrollTrigger: trigger2,
	// 	x: () => "+=" + -textmove,
	// }).to(".test .test-sticky-text .text-stroke .text2 h3",{
	// 	scrollTrigger: trigger2,
	// 	x: () => "+=" + textmove,
	// });
	// gsap.timeline().to(".test .test-sticky-text .text-fill .text3 h3",{
	// 	scrollTrigger: trigger3,
	// 	x: () => "+=" + -textmove,
	// }).to(".test .test-sticky-text .text-stroke .text3 h3",{
	// 	scrollTrigger: trigger3,
	// 	x: () => "+=" + textmove,
	// });
	// gsap.timeline().to(".test .test-sticky-text .text-fill .text4 h3",{
	// 	scrollTrigger: triggerlast,
	// 	x: () => "+=" + -textmove,
	// }).to(".test .test-sticky-text .text-stroke .text4 h3",{
	// 	scrollTrigger: triggerlast,
	// 	x: () => "+=" + textmove,
	// });
};

function workAlign(){

	var naviheight 		= $(".nav-container").height(),
		navlinkheight	= $(".nav-bar").height();
	$(".nav-bar").css("margin-top", ' ' + (naviheight - navlinkheight)/2 + 'px ');
	$(".nav-bar").css("margin-bottom", ' ' + (naviheight - navlinkheight)/2 + 'px ');

	var playgroundcontainer = $(".playground .playground-container").height(),
		playground = $(".playground").height();
	$(".playground .playground-container").css("margin-top", ' ' + (playground-playgroundcontainer)/2 + 'px ');

	// var width = $(window).innerWidth(),
	// 	height = $(window).innerHeight(),
	// 	text1 = $(".test .text-stroke .text1").width(),
	// 	text1width = $(".test .text-stroke .text1 h3").width()*$(".test .text-stroke .text1 h3").length,
	// 	text2 = $(".test .text-stroke .text2").width(),
	// 	text2width = $(".test .text-stroke .text2 h3").width()*$(".test .text-stroke .text2 h3").length,
	// 	text3 = $(".test .text-stroke .text3").width(),
	// 	text3width = $(".test .text-stroke .text3 h3").width()*$(".test .text-stroke .text3 h3").length;
	// 	text4 = $(".test .text-stroke .text4").width(),
	// 	text4width = $(".test .text-stroke .text4 h3").width()*$(".test .text-stroke .text4 h3").length;
	// $(".test .text-stroke .text1").css("margin-left", ' ' + -(text1width - .5*width) + 'px ');
	// $(".test .text-stroke .text2").css("margin-left", ' ' + -(text2width - .5*width) + 'px ');
	// $(".test .text-stroke .text3").css("margin-left", ' ' + -(text3width - .5*width) + 'px ');
	// $(".test .text-stroke .text4").css("margin-left", ' ' + -(text4width - .5*width) + 'px ');
}

$(document).ready(function(){
	workAlign();
	window.addEventListener('load', function(){
		work();
		console.log("fuck")
	})
})


	



