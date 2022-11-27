$(document).ready(function(val){

	var width = $(window).innerWidth();
	var height = $(window).innerHeight();
	var cirlewidth = $('.menucircle').width();


	$('.navisticky .navlinksm .menuicon').click(function(val){
		if ( $(this).hasClass("checked") ) {
			$(this).removeClass("checked");
			$('.menuicontainer').removeClass("checked");
			document.body.style.overflow = '';
		} else {
			$(this).addClass("checked");
			$('.menuicontainer').addClass("checked");
			document.body.style.overflow = 'hidden';
		}
	});

	$('.menucircle').css({
		right: ' ' + -((cirlewidth)*.4) + 'px '
	});


});