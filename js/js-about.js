$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	var width = $(window).innerWidth();
	var height = $(window).innerHeight();
	const up = scroll / height;
	var constchange = 1;

	var p = $( "p" ).first();
	$( ".textscroll p" ).text( up );

	if (up >= constchange*.1) {
		if (up<= constchange*.2) {
			$('.hellosticker').addClass('done');
		}
	} else{
		$('.hellosticker').removeClass('done');
	}
});

$(document).ready(function(val){
	var scroll = $(window).scrollTop();
	var width = $(window).innerWidth();
	var height = $(window).innerHeight();
	var up = scroll / height;
});