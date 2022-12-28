const cursorO = document.querySelector('.cursor-outer');
const cursorI = document.querySelector('.cursor-inner');


console.log(cursorO);
console.log(cursorI);


document.addEventListener("mousemove", e=>{
	var scroll = $(window).scrollTop();


	cursorO.style.top = e.pageY-scroll + "px";
	cursorO.style.left = e.pageX + "px";

	cursorI.style.top = e.pageY-scroll + "px";
	cursorI.style.left = e.pageX + "px";
});



var contentcursor = document.querySelectorAll('.contentcursor');
console.log(contentcursor.length);

$('.contentcursor').hover(function() {
	$(cursorO).addClass('onhover');
	$(cursorI).addClass('onhover');
}, function() {
	$(cursorO).removeClass('onhover');
	$(cursorI).removeClass('onhover');
})

