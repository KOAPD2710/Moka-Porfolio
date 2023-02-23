$(document).ready(function(e){



	var naviheight 		= $(".nav-container").height(),
		navlinkheight	= $(".nav-bar").height();
	$(".nav-bar").css("margin-top", ' ' + (naviheight - navlinkheight)/2 + 'px ');
	$(".nav-bar").css("margin-bottom", ' ' + (naviheight - navlinkheight)/2 + 'px ');


	var flower1height 	= $(".moka-bandroll img").height(),
		mokabandroll	= $(".moka-bandroll").height();
	$(".moka-bandroll img").css("margin-top", ' ' + (mokabandroll - flower1height)/2 + 'px ');
	$(".moka-bandroll img").css("margin-bottom", ' ' + (mokabandroll - flower1height)/2 + 'px ');

	var flower2height 	= $(".folio-bandroll img").height(),
		foliobandroll	= $(".folio-bandroll").height();
	$(".folio-bandroll img").css("margin-top", ' ' + ((foliobandroll - flower2height)/2)*1.2 + 'px ');
	// $(".folio-bandroll img").css("margin-bottom", ' ' + (foliobandroll - flower2height)/2 + 'px ');

});

window.addEventListener("resize", () => {
	var width = $(window).innerWidth(),
		height = $(window).innerHeight();
	console.log(width, height);
	if (width >= height) {
		$("#horizontal-screen").css("display", "block");
		$("#vertical-screen").css("display", "none");
		console.log("horizontal-screen");
	} else {
		$("#horizontal-screen").css("display", "none");
		$("#vertical-screen").css("display", "block");
		console.log("vertical-screen");
	}
});


