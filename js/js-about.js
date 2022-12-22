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

	// $('.lotsofthing').ready(function(val){
	// 	if ( $('.lotsofthing .text1').hasClass('showt')) {
	// 		$('.lotsofthing p').removeClass('showt');
	// 		$('.lotsofthing p').addClass('hiddent');
	// 		$('.lotsofthing .text1').next().removeClass('hiddent');
	// 		$('.lotsofthing .text1').next().addClass('showt');
	// 	}
	// 	if ( $('.lotsofthing .text2').hasClass('showt')) {
	// 		$('.lotsofthing p').removeClass('showt');
	// 		$('.lotsofthing p').addClass('hiddent');
	// 		$('.lotsofthing .text2').next().removeClass('hiddent');
	// 		$('.lotsofthing .text2').next().addClass('showt');
	// 	}
	// 	if ( $('.lotsofthing .text3').hasClass('showt')) {
	// 		$('.lotsofthing p').removeClass('showt');
	// 		$('.lotsofthing p').addClass('hiddent');
	// 		$('.lotsofthing .text3').prev().prev().removeClass('hiddent');
	// 		$('.lotsofthing .text3').prev().prev().addClass('showt');
	// 	}
	// })



	$("#hiremecircle").hover(function(){
		$("#hiremecircle .cirle2").css({
			scale : "1"
		});
		$("#hiremecircle .cursor").css({
			scale : "1"
		});
		$(".hiremecircle .hiretext").text('Hire Me').delay(5000);
	}, function(){
		$("#hiremecircle .cirle2").css({
			scale : "0"
		});
		$("#hiremecircle .cursor").css({
			scale : "0"
		});
		$(".hiremecircle .hiretext").text('Have an idea?').delay(5000);
	})
	
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




	if (up >= 5) {
		if (5 <= 6) {
			$(".foooter .foot").css({
				translate:  '0 ' + ((50)*up + (-300)) + 'vw '
			});
		}
	}
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
		if (up <= 1.7) {
			$('.aboutcontainer').css({
				left: ' ' + ((-1000/7)*up + (1000/7)) + 'vw '
			})
			$('.aboutcontainer #mokatext').css({
				transform: 'rotateX(' + ((100)*up + (-100)) + 'deg) skewX(' + ((-200/7)*up + (200/7)) + 'deg) scale(' + ((-5/7)*up + (12/7)) + ')'
			});
			$('.aboutcontainer #a-bit-about').css({
				transform: 'rotateX(' + ((100)*up + (-170)) + 'deg) skewX(' + ((-200/7)*up + (340/7)) + 'deg) scale(' + ((5/7)*up + (-3/14)) + ')'
			});
		}
		if (up >= 2) {
			if (up <= 2.7) {
				$('.aboutcontainer').css({
					left: ' ' + ((-1000/7)*up + (1300/7)) + 'vw '
				});
				$('.aboutcontainer #a-bit-about').css({
					transform: 'rotateX(' + ((-100)*up + (200)) + 'deg) skewX(' + ((-200/7)*up + (400/7)) + 'deg) scale(' + ((-5/7)*up + (17/7)) + ')'
				});
			} else {
				$('.aboutcontainer').css({
					left: '-200vw'
				});
				$('.aboutcontainer #a-bit-about').css({
					transform: 'rotateX(0deg) skewX(0deg) scale(1)'
				});
			}
		}
	} else {
		$('.aboutcontainer').css({
			left: '0vw'
		});
		$('.aboutcontainer #mokatext').css({
			transform: 'rotateX(0deg) skewX(0deg) scale(1)'
		});
	}


	if (up >= 2.9) {
		if (up <= 4.2) {
			$(".hireme .scrolldown").css({
				top: ' ' + ((150/13)*up + (-435/13)) + 'vh '
			});
		}

		if (up > 4.2) {
			if (up <= 4.3) {
				$(".hireme .scrolldown").css({
					opacity: '0'
				});
				$(".infotext").addClass('checked');
			} else {
				$(".hireme .scrolldown").css({
					opacity: '0'
				});
				$(".infotext").addClass('checked');
			}
		} else {
			$(".hireme .scrolldown").css({
				opacity: '1'
			});
			$(".infotext").removeClass('checked');
		}

		if (up > 4.5) {
			if (up <= 4.8) {
				$(".hireme .infotext .lotsofthing p").removeClass('showt');
				$(".hireme .infotext .lotsofthing p").addClass('hiddent');
				$(".hireme .infotext .lotsofthing .text2").addClass('showt');
				$(".hireme .infotext .lotsofthing .text2").removeClass('hiddent');
			} else{
				$(".hireme .infotext .lotsofthing p").removeClass('showt');
				$(".hireme .infotext .lotsofthing p").addClass('hiddent');
				$(".hireme .infotext .lotsofthing .text3").addClass('showt');
				$(".hireme .infotext .lotsofthing .text3").removeClass('hiddent');
			}
		} else {
			$(".hireme .infotext .lotsofthing p").removeClass('showt');
			$(".hireme .infotext .lotsofthing p").addClass('hiddent');
			$(".hireme .infotext .lotsofthing .text1").addClass('showt');
			$(".hireme .infotext .lotsofthing .text1").removeClass('hiddent');
	}
	}
	if (up >= 4.4) {
		if (up <= 4.6) {
			$("#hiremecircle").css({
				scale: '1'
			});
		} else {
			$("#hiremecircle").css({
				scale: '1'
			});
		}
	} else {
		$("#hiremecircle").css({
			scale: '0'
		});
	}

	if (up >= 1.5) {
		if (up <= 2.5) {
			$(".sm .infotextsm .textcontainer").css({
				left: ' ' + ((-150)*up + (225)) + '% '
			});
		} else {
			$(".sm .infotextsm .textcontainer").css({
				left: '-150vw'
			});
		}
	} else {
		$(".sm .infotextsm .textcontainer").css({
			left: '0vw'
		});
	}

});


