function pageInTransition(){gsap.from("ul#curtain li",{scaleY:2,duration:1,ease:Power2.Out,stagger:{from:"random",amount:.2}})}function pageOutTransition(){gsap.to("ul#curtain li",{scaleY:2,duration:.8,ease:Power4.Out,stagger:{from:"random",amount:.2}}),gsap.from("*",{background:"#FFF4E6 !important",duration:.5})}function reSize(){var e=$(window).innerWidth(),n=$(window).innerHeight();console.log(e,n),e>=n?($("#horizontal-screen").css("display","block"),$("#vertical-screen").css("display","none"),console.log("horizontal-screen")):($("#horizontal-screen").css("display","none"),$("#vertical-screen").css("display","block"),console.log("vertical-screen"))}window.addEventListener("resize",(()=>{reSize()})),$(document).ready((function(e){pageInTransition(),reSize();document.querySelectorAll("a[prefetch]").forEach((e=>{e.addEventListener("click",(function(e){pageOutTransition(),e.preventDefault();const n=this.getAttribute("href"),o=document.createElement("link");o.rel="prefetch",o.href=n,document.head.appendChild(o),setTimeout((()=>{window.location.href=n}),1e3)}))}))}));