var width = $(window).innerWidth(),
	height = $(window).innerHeight();

sec1ph = $('.section1 .move-text').innerHeight();
sec1pt = $('.section1 .move-text').offset().top;
sec1hh = $('.section1 .hello .text .first').innerHeight()/1.5;
test = height-(sec1ph+sec1pt+sec1hh);

gsap.set(".section1 .hello .text .first", {
	marginTop: test
})
console.log(test)