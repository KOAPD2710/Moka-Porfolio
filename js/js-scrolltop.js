var scroll = $(window).scrollTop();
var width = $(window).innerWidth();
var height = $(window).innerHeight();
var up = scroll / height;


if ( width >= height ) {
	$('.olipop').css({
		width: '50%'
	});
	$('.olipop').css({
		height: '100%'
	});
	$('.olipopvideo').css({
		width: '100%'
	});
	$('.olipopvideo').css({
		height: 'auto'
	});
} else {
	$('.olipop').css({
		width: '100%'
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

$('#stickercontainer svg').hover(function(){
	$('#stickercontainer svg').addClass('hovered');
	$(this).addClass('hoverthis');
	$(this).parent().parent('div').addClass('checked');
},function() {
	$(this).removeClass('hoverthis');
	$('#stickercontainer svg').removeClass('hovered');
	$(this).parent().parent('div').removeClass('checked');
});


$('.talmbg .hiremecircle').hover(function(){
	$(this).addClass('hovered');
}, function(){
	$(this).removeClass('hovered');
});


$(window).scroll(function(e) {
	var scroll = $(window).scrollTop();
	var width = $(window).innerWidth();
	var height = $(window).innerHeight();
	var up = scroll / height;
	var numlock = 30;
	/* Up run form 1 and up to ...*/
	var p = $( "p" ).first();
	$( ".textscroll p" ).text( up );

	if ( up >= 1) {
		$(".olipop").css({
			transform: 'translate3d(-50%, ' + (-50 + (up - 1)*(numlock)) + '%, 0)'
		});
	};
	if ( width >= height ) {
		$(".olipop").css({
			width: ' ' + (50 + (up)*50) + '% '
		});
	} else {
		$(".olipop").css({
			height: ' ' + (50 + (up)*50) + '% '
		});
	};
	if ( up >= 1) {
		if (up <= 5) {
			$('.didesign .mokabandroll').css({
			transform: 'translateX(' + ((60/7)*up +(-90/7)) + '%)'
			});
			$('.didesign .foliobandroll').css({
				transform: 'translateX(' + ((-50/7)*up +(75/7)) + '%)'
			});
			$(".didesign #flowersticker").css({
				transform: 'rotate(' + ((60)*up) + 'deg)'
			})
		}
	};
	if (4.5 > up) {
		$('.bgcontent').css({
			backgroundColor: 'var(--t)'
		});
		$('#goodat').css({
			color: 'black'
		});
		$('.didesign .star').css({
			fill: 'black'
		});
	};
	if (4.5 <= up) {
		if (up <= 5) {
			$('.bgcontent').css({
				backgroundColor: 'black'
			});
			$('#goodat').css({
				color: 'var(--t)'
			});
			$('.didesign .star').css({
				fill: 'var(--t)'
			});
		} else{
			$('.bgcontent').css({
				backgroundColor: 'black'
			});
			$('#goodat').css({
				color: 'var(--t)'
			});
			$('.didesign .star').css({
				fill: 'var(--t)'
			});
		}
	}

	if (4.5 <= up && up <= 5.1) {
		$('#goodat').css({
			fontSize: ' ' + ((-9)*up + (549/10)) + 'vw '
		});
	}

	if (4 <= up && up <= 5) {
		$('#star').css({
			transform: ' translateY(' + (-200*up + 800) + '% )'
		});
	}


	if ( up > 5.90000004999999){
		$('#stickercontainer nav').addClass('done');
	}
	if ( up < 4){
		$('#stickercontainer nav').removeClass('done');

		$('#visualdesign').css({
			transform: 'translate3d(10%, 250%, 0px) scale(.75) rotate(-30deg)'
		});
		$('#graphicdesigner').css({
			transform: 'translate3d(200%, 0%, 0px) scale(.6) rotate(70deg)'
		});
		$('#handdrawing').css({
			transform: 'translate3d(-100%, 100%, 0px) scale(.7) rotate(-27deg)'
		});
		$('#brandidentity').css({
			transform: 'translate3d(100%, 50%, 0px) scale(.5) rotate(60deg)'
		});
		$('#artdirection').css({
			transform: 'translate3d(-250%, -20%, 0px) scale(.6) rotate(60deg)'
		});
		$('#uidesigner').css({
			transform: 'translate3d(-200%, 50%, 0px) scale(.6) rotate(-10deg)'
		});
	}

	if (up >= 5) {
		if (up <= 5.9) {
			$('#visualdesign').not('.done').css({
				transform: 'translate3d(' + ((-100/3)*up + (530/3)) + '%, ' +  ((-4300/9)*up + (23750/9)) + '%, 0px) 	scale(' +  ((5/18)*up + (-23/36)) + ') rotate(' + (((500/9)*up + (-2770/9))) + 'deg)'
			});
			$('#graphicdesigner').not('.done').css({
				transform: 'translate3d(' + ((-500/3)*up + (3100/3)) + '%, ' +  ((-500/9)*up + (2500/9)) + '%, 0px) 	scale(' +  ((2/3)*up + (-41/15)) + ') rotate(' + (((-700/9)*up + (4130/9))) + 'deg)'
			});
			$('#handdrawing').not('.done').css({
				transform: 'translate3d(' + ((500/9)*up + (-3400/9)) + '%, ' +  ((-500/3)*up + (2800/3)) + '%, 0px) 	scale(' +  ((5/9)*up + (-187/90)) + ') rotate(' + (((30)*up + (-177))) + 'deg)'
			});
			$('#brandidentity').not('.done').css({
				transform: 'translate3d(' + ((-1000/9)*up + (5900/9)) + '%, ' +  ((-400/9)*up + (2450/9)) + '%, 0px) 	scale(' +  ((7/9)*up + (-61/18)) + ') rotate(' + (((-200/3)*up + (1180/3))) + 'deg)'
			});
			$('#artdirection').not('.done').css({
				transform: 'translate3d(' + ((1400/9)*up + (-9250/9)) + '%, ' +  ((-500/9)*up + (2320/9)) + '%, 0px) 	scale(' +  ((2/3)*up + (-41/15)) + ') rotate(' + (((-200/3)*up + (1180/3))) + 'deg)'
			});
			$('#uidesigner').not('.done').css({
				transform: 'translate3d(' + ((1000/9)*up + (-6800/9)) + '%, ' +  ((-100/3)*up + (650/3)) + '%, 0px) 	scale(' +  ((2/3)*up + (-41/15)) + ') rotate(' + (((100/9)*up + (-590/9))) + 'deg)'
			});
		} else {
			$('#visualdesign').css({
				transform: 'translate3d(-20%, -180%, 0px) scale(1) rotate(20deg)'
			});
			$('#graphicdesigner').css({
				transform: 'translate3d(50%, -50%, 0px) scale(1.2) rotate(0deg)'
			});
			$('#handdrawing').css({
				transform: 'translate3d(-50%, -50%, 0px) scale(1.2) rotate(0deg)'
			});
			$('#brandidentity').css({
				transform: 'translate3d(0%, 10%, 0px) scale(1.2) rotate(0deg)'
			});
			$('#artdirection').css({
				transform: 'translate3d(-110%, -70%, 0px) scale(1.2) rotate(0deg)'
			});
			$('#uidesigner').css({
				transform: 'translate3d(-100%, 20%, 0px) scale(1.2) rotate(0deg)'
			});
		}
	}
	if (up >= 7) {
		if (up <= 7.1) {
			$('.talmbg .hiremecircle').addClass('checked');
		} else {
			$('.talmbg .hiremecircle').addClass('checked');
		}
	} else {
		$('.talmbg .hiremecircle').removeClass('checked');
	};

	if (up >= 8) {
		if (up < 9) {
			$("#footindex1").css({
				top: ' ' + ((100)*up + (-900)) + 'vh'
			});
		} else {
			$("#footindex1").css({
				top: '0vh'
			});
		}
	} else {
		$("#footindex1").css({
			top: '-100vh'
		});
	}
});


document.addEventListener("mousemove", function() {
	if ( up < 4){
		$('#stickercontainer nav').removeClass('done');

		$('#visualdesign').css({
			transform: 'translate3d(10%, 250%, 0px) scale(.75) rotate(-30deg)'
		});
		$('#graphicdesigner').css({
			transform: 'translate3d(200%, 0%, 0px) scale(.6) rotate(70deg)'
		});
		$('#handdrawing').css({
			transform: 'translate3d(-100%, 100%, 0px) scale(.7) rotate(-27deg)'
		});
		$('#brandidentity').css({
			transform: 'translate3d(100%, 50%, 0px) scale(.5) rotate(60deg)'
		});
		$('#artdirection').css({
			transform: 'translate3d(-250%, -20%, 0px) scale(.6) rotate(60deg)'
		});
		$('#uidesigner').css({
			transform: 'translate3d(-200%, 50%, 0px) scale(.6) rotate(-10deg)'
		});
	}

	if (up >= 5) {
		if (up <= 5.9) {
			$('#visualdesign').not('.done').css({
				transform: 'translate3d(' + ((-100/3)*up + (530/3)) + '%, ' +  ((-4300/9)*up + (23750/9)) + '%, 0px) 	scale(' +  ((5/18)*up + (-23/36)) + ') rotate(' + (((500/9)*up + (-2770/9))) + 'deg)'
			});
			$('#graphicdesigner').not('.done').css({
				transform: 'translate3d(' + ((-500/3)*up + (3100/3)) + '%, ' +  ((-500/9)*up + (2500/9)) + '%, 0px) 	scale(' +  ((2/3)*up + (-41/15)) + ') rotate(' + (((-700/9)*up + (4130/9))) + 'deg)'
			});
			$('#handdrawing').not('.done').css({
				transform: 'translate3d(' + ((500/9)*up + (-3400/9)) + '%, ' +  ((-500/3)*up + (2800/3)) + '%, 0px) 	scale(' +  ((5/9)*up + (-187/90)) + ') rotate(' + (((30)*up + (-177))) + 'deg)'
			});
			$('#brandidentity').not('.done').css({
				transform: 'translate3d(' + ((-1000/9)*up + (5900/9)) + '%, ' +  ((-400/9)*up + (2450/9)) + '%, 0px) 	scale(' +  ((7/9)*up + (-61/18)) + ') rotate(' + (((-200/3)*up + (1180/3))) + 'deg)'
			});
			$('#artdirection').not('.done').css({
				transform: 'translate3d(' + ((1400/9)*up + (-9250/9)) + '%, ' +  ((-500/9)*up + (2320/9)) + '%, 0px) 	scale(' +  ((2/3)*up + (-41/15)) + ') rotate(' + (((-200/3)*up + (1180/3))) + 'deg)'
			});
			$('#uidesigner').not('.done').css({
				transform: 'translate3d(' + ((1000/9)*up + (-6800/9)) + '%, ' +  ((-100/3)*up + (650/3)) + '%, 0px) 	scale(' +  ((2/3)*up + (-41/15)) + ') rotate(' + (((100/9)*up + (-590/9))) + 'deg)'
			});
		} else {
			$('#visualdesign').css({
				transform: 'translate3d(-20%, -180%, 0px) scale(1) rotate(20deg)'
			});
			$('#graphicdesigner').css({
				transform: 'translate3d(50%, -50%, 0px) scale(1.2) rotate(0deg)'
			});
			$('#handdrawing').css({
				transform: 'translate3d(-50%, -50%, 0px) scale(1.2) rotate(0deg)'
			});
			$('#brandidentity').css({
				transform: 'translate3d(0%, 10%, 0px) scale(1.2) rotate(0deg)'
			});
			$('#artdirection').css({
				transform: 'translate3d(-110%, -70%, 0px) scale(1.2) rotate(0deg)'
			});
			$('#uidesigner').css({
				transform: 'translate3d(-100%, 20%, 0px) scale(1.2) rotate(0deg)'
			});
		}
	}
})






