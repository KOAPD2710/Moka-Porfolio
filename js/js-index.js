$(document).ready(function(e){
	var naviheight 		= $(".nav-container").height(),
		navlinkheight	= $(".nav-bar").height();

	$(".nav-bar").css("margin-top", ' ' + (naviheight - navlinkheight)/2 + 'px ');
	$(".nav-bar").css("margin-bottom", ' ' + (naviheight - navlinkheight)/2 + 'px ');
})