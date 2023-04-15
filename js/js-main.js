function pageInTransition() {
	gsap.from('ul#curtain li', {
		scaleY: 2,
		duration: 1,
		ease: Power2.Out,
		stagger: {
			from: "random",
			amount: .2
		}
	})
}

function pageOutTransition() {
	gsap.to('ul#curtain li', {
		scaleY: 2,
		duration: .8,
		ease: Power4.Out,
		stagger: {
			from: "random",
			amount: .2
		}
	})
	gsap.from('*', {
		background: "#FFF4E6 !important",
		duration: .5
	})
}

function reSize() {
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
}


window.addEventListener("resize", () => {
	reSize()
});

$(document).ready(function(e) {
	pageInTransition();
	reSize();
	// Select all a tags
	const links = document.querySelectorAll("a[prefetch]");

	// Loop through each a tag
	links.forEach((link) => {
		// Add click event listener
		link.addEventListener("click", function (e) {
			pageOutTransition()
			// Prevent default behavior
			e.preventDefault();
			// Get the href attribute value
			const href = this.getAttribute("href");
			const prefetchLink = document.createElement('link');
			prefetchLink.rel = 'prefetch';
			prefetchLink.href = href;
			document.head.appendChild(prefetchLink);
			// Delay for 500ms
			setTimeout(() => {
				// Redirect to the href value
				window.location.href = href;
			}, 1000);
		});
	});
})






// document.querySelectorAll('a').forEach(link => {
//   link.addEventListener('click', () => {
//   	pageOutTransition();
//     const href = link.getAttribute('href');
//     const prefetchLink = document.createElement('link');
//     prefetchLink.rel = 'prefetch';
//     prefetchLink.href = href;
//     document.head.appendChild(prefetchLink);
//   });
// });
