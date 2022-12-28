$(document).ready(function(){
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


	$(window).scroll(function(){
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
		if ( up > 5.50000004999999){
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
			if (up <= 5.5) {
				$('#visualdesign').not('.done').css({
					transform: 'translate3d(' + ((-60)*up + (310)) + '%, ' +  ((-860)*up + (4550)) + '%, 0px) 	scale(' +  ((9/10)*up + (-15/4)) + ') rotate(' + (((100)*up + (-530))) + 'deg)'
				});
				$('#graphicdesigner').not('.done').css({
					transform: 'translate3d(' + ((-300)*up + (1700)) + '%, ' +  ((-100)*up + (500)) + '%, 0px) 	scale(' +  ((6/5)*up + (-27/5)) + ') rotate(' + (((-140)*up + (770))) + 'deg)'
				});
				$('#handdrawing').not('.done').css({
					transform: 'translate3d(' + ((100)*up + (-600)) + '%, ' +  ((-300)*up + (1600)) + '%, 0px) 	scale(' +  ((1)*up + (-43/10)) + ') rotate(' + (((54)*up + (-297))) + 'deg)'
				});
				$('#brandidentity').not('.done').css({
					transform: 'translate3d(' + ((-200)*up + (1100)) + '%, ' +  ((-80)*up + (450)) + '%, 0px) 	scale(' +  ((7/5)*up + (-13/2)) + ') rotate(' + (((-120)*up + (660))) + 'deg)'
				});
				$('#artdirection').not('.done').css({
					transform: 'translate3d(' + ((280)*up + (-1650)) + '%, ' +  ((-100)*up + (480)) + '%, 0px) 	scale(' +  ((6/5)*up + (-27/5)) + ') rotate(' + (((-120)*up + (660))) + 'deg)'
				});
				$('#uidesigner').not('.done').css({
					transform: 'translate3d(' + ((200)*up + (-1200)) + '%, ' +  ((-60)*up + (350)) + '%, 0px) 	scale(' +  ((6/5)*up + (-27/5)) + ') rotate(' + (((20)*up + (-110))) + 'deg)'
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
					transform: 'translate3d(-110%, -70%, 0px) scale(1.2) rotate(0deg);'
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
		}


		if ( up >= 7.4) {
			if (up <= 8.8) {
				$("#physicscreen").css({
					top : ' ' + ((250/7)*up +(-1850/7)) + '% '
				})
			} else {
				$("#physicscreen").css({
					top : '50%'
				})
			}
		} else {
			 $("#physicscreen").css({
				top : '0%'
			})
		}
	});
});





