function getScrollXY() {
	var scrOfX = 0, scrOfY = 0;
	if( typeof( window.pageYOffset ) == 'number' ) {
		//Netscape compliant
		scrOfY = window.pageYOffset;
		scrOfX = window.pageXOffset;
	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
		//DOM compliant
		scrOfY = document.body.scrollTop;
		scrOfX = document.body.scrollLeft;
	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
		//IE6 standards compliant mode
		scrOfY = document.documentElement.scrollTop;
		scrOfX = document.documentElement.scrollLeft;
	}
	return [ scrOfX, scrOfY ];
}



$(function(){
	var page = 0;
	var distance = 0;
	$('#contentcontainer').scroll(function(){
		var offs = getScrollXY();
		var page = $(window).scrollTop();
		var beforescroll = $(".nameabout .sticky").offset().top;

		if (page == beforescroll){
			// up
			console.log(page);
			console.log(beforescroll);
		} else {
			console.log(page);
			console.log(beforescroll);
		}
		
	})
	
})
// $(function() {
// 	$(window).scroll(function() {
// 		var contentcontainer = $("#contentcontainer");
// 		var offs = getScrollXY();
// 		$(contentcontainer).attr('offset');
// 	});
// });