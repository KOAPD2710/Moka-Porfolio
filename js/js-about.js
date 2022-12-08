$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	var width = $(window).innerWidth();
	var height = $(window).innerHeight();
	const up = scroll / height;
	var constchange = 1;

	var p = $( "p" ).first();
	$( ".textscroll p" ).text( up );

	if (up >= constchange*.1) {
		if (up <= constchange*.2) {
			$('.hellosticker').addClass('done');
		}
	} else{
		$('.hellosticker').removeClass('done');
		$('.kid2ksticker').removeClass('done');
		$('.lighningsticker').removeClass('done');
		$('.screationsticker').removeClass('done');
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
});

$(document).ready(function(val){
	var scroll = $(window).scrollTop();
	var width = $(window).innerWidth();
	var height = $(window).innerHeight();
	var up = scroll / height;
});