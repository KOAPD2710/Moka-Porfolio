$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	var height = $(window).innerHeight();
	var up = scroll / height;
	var numlock = 30;
	/* Up run form 1 and up to ...*/
	var p = $( "p" ).first();
	$( ".textscroll p" ).text( up );

	$(".olipop").css({
		width: ' ' + (50 + (up)*50) + '% '
	});

	$('.mokabandroll svg').css({
		transform: 'rotate(' + (up*80) + 'deg)'
	});

	if ( up >= 1) {
		$(".olipop").css({
			transform: 'translate3d(-50%, ' + (-50 + (up - 1)*(numlock)) + '%, 0)'
		});
		document.body.style.backgroundColor = 'var(--gr)';
	} else{
		document.body.style.backgroundColor = 'black';
	}

	if ( 1.5 <= up && up <= 4 ) {
		$(".welcome .mokabandroll").css({
			transform: 'translateX(' + -(up-2)*30/2 + '%)'
		});
	}
});
