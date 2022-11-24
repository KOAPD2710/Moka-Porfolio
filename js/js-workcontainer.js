$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var width = $(window).innerWidth();
	var height = $(window).innerHeight();
    var up = scroll / height;
    var num = 25;
    var vhnum = $('.workcontainer').parents('.contentcontainer').css('--i');
    var workcontainerWidth = $(".workcontainer").width();
    var workcontainer = workcontainerWidth - (2*num*width/100);
    var constnum = ((up-1))/(vhnum-2);
    /* Up run form 1 and up to 6*/

    var p = $( "p" ).first();
    $( ".textscroll p" ).text( up );

	$('.workcontainer').css({
		padding: '0px ' + (num) + 'vw '
	});
	$('.work nav').css({
		width: ' ' + (100 - 2*(num)) + 'vw '
	});
	$('.work nav').css({
		height: ' ' + ((100 - 2*(num))*2/3) + 'vw '
	});

    if (0.9999994999999997 <= up) {
        $(".workcontainer").css({
            transform: 'translateX(' + -(constnum*(workcontainer)) + 'px)'
        });

    };
});
