$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	var width = $(window).innerWidth();
	var height = $(window).innerHeight();
	var up = scroll / height;
	var numlock = 30;
	/* Up run form 1 and up to ...*/
	var p = $( "p" ).first();
	$( ".textscroll p" ).text( up );


	$('.mokabandroll svg').css({
		transform: 'rotate(' + (up*80) + 'deg)'
	});

	if ( width >= height ) {
		$(".olipop").css({
			width: ' ' + (50 + (up)*50) + '% '
		});
		$(".olipop").css({
			height: 'auto'
		});
		if ( up >= 1) {
			$(".olipop").css({
				transform: 'translate3d(-50%, ' + (-50 + (up - 1)*(numlock)) + '%, 0)'
			});
		}
	} else {
		$(".olipop").css({
			height: ' ' + (50 + (up)*50) + '% '
		});
		if ( up >= 1) {
			$(".olipop").css({
				transform: 'translate3d(-50%, ' + (-50 + (up - 1)*(numlock)) + '%, 0)'
			});
		}

	}


	if ( 1.5 <= up && up <= 4 ) {
		$(".welcome .mokabandroll").css({
			transform: 'translateX(' + -(up-2)*30/2 + '%)'
		});
	}
});


$(document).ready(function(){
	var width = $(window).innerWidth();
	var height = $(window).innerHeight();

	
	if ( width >= height ) {
		$('.olipop').css({
			width: '50%'
		});
		$('.olipop').css({
			height: ''
		});
		$('.olipopvideo').css({
			width: '100%'
		});
		$('.olipopvideo').css({
			height: 'auto'
		});
	} else {
		$('.olipop').css({
			width: ''
		});
		$('.olipop').css({
			height: '50%'
		});
		$('.olipopvideo').css({
			width: 'auto'
		});
		$('.olipopvideo').css({
			height: '100%'
		});
	}
});
