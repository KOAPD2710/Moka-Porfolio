$(document).ready(function(val){
	var scroll = $(window).scrollTop();
	var width = $(window).innerWidth();
	var height = $(window).innerHeight();
	var up = scroll / height;
	var gapaboutinfo = 0;
	$('.smilesticker').addClass('done');

	if (up >= .5) {
		$('.hellosticker').addClass('done');
		$('.kid2ksticker').addClass('done');
		$('.lighningsticker').addClass('done');
		$('.screationsticker').addClass('done');
	}

	$(".aboutcontainer").css({
		gap: ' ' + (gapaboutinfo) + 'vw '
	});
	$(".aboutcontainer").css({
		width: ' ' + (4*(100 + gapaboutinfo) - gapaboutinfo) + 'vw '
	});
});


$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	var width = $(window).innerWidth();
	var height = $(window).innerHeight();
	const up = scroll / height;
	var gapaboutinfo = 0;
	var constchange = 1;
	var offset = $('#contentcontainer').offset();

	var p = $( "p" ).first();
	$( ".textscroll p" ).text(up);

	if (up >= constchange*.1) {
		if (up <= constchange*.2) {
			$('.hellosticker').addClass('done');
		}
		if (up >= constchange*.2) {
			if (up <= constchange*.3) {
				$('.kid2ksticker').addClass('done');
			}
		}
		if (up >= constchange*.3) {
			if (up <= constchange*.4) {
				$('.lighningsticker').addClass('done');
			}
		}
		if (up >= constchange*.4) {
			if (up <= constchange*.5) {
				$('.screationsticker').addClass('done');
			}
		}
	} else{
		$('.hellosticker').removeClass('done');
		$('.kid2ksticker').removeClass('done');
		$('.lighningsticker').removeClass('done');
		$('.screationsticker').removeClass('done');
	}


	// if (up >=0) {
	// 	if (up <1) {
	// 		$(".aboutcontainer").addClass('slide1');
	// 		$(".aboutcontainer").removeClass('slide2');
	// 		$(".aboutcontainer").removeClass('slide3');
	// 	}
	// 	if (up >=1) {
	// 		if (up <2) {
	// 			$(".aboutcontainer").addClass('slide2');
	// 			$(".aboutcontainer").removeClass('slide1');
	// 			$(".aboutcontainer").removeClass('slide3');
	// 		}
	// 	}
	// 	if (up >= 2) {
	// 		if (up <3) {
	// 			$(".aboutcontainer").addClass('slide3');
	// 			$(".aboutcontainer").removeClass('slide1');
	// 			$(".aboutcontainer").removeClass('slide2');
	// 		}
	// 	}
	// }


	if (up >= 1) {
		if (up <= 1.85) {
			$('.aboutcontainer').css({
				left: ' ' + ((-2000/17)*up + (2000/17)) + 'vw '
			})
			$('.aboutcontainer #mokatext').css({
				transform: 'rotateX(' + ((90)*up + (-90)) + 'deg) skewX(' + ((-20)*up + (20)) + 'deg)'
			});
			$('.aboutcontainer #a-bit-about').css({
				transform: 'rotateX(' + ((1400/17)*up + (-2590/17)) + 'deg) skewX(' + ((-200/17)*up + (370/17)) + 'deg)'
			});
		}
		if (up >= 2.25) {
			if (up <= 3.1) {
				$('.aboutcontainer').css({
					left: ' ' + ((-2000/17)*up + (2800/17)) + 'vw '
				})
			}
		}
	} else {
		$('.aboutcontainer').css({
			left: '0vw'
		})
	}
});


