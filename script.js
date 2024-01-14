function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

function textSplitting(){
    var allH1 = document.querySelectorAll("#page2 h1")
    allH1.forEach(function(elem){
        var clutter = ""
        var h1Text = elem.textContent
        var splittedText = h1Text.split("")
        splittedText.forEach(function(e){
            clutter += `<span>${e}</span>`
        })
        elem.innerHTML = clutter
    })
}

function gsapAnimation(){
    gsap.to("#page2 h1 span", {
        color: "#E3E3c4",
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#page2 h1",
            scroller: "#main",
            start: "top 45%",
            end: "top -20%",
            scrub: 3,
        }
    })
    gsap.from("#page1 #image", {
        scale: 0.5,
        duration: 1,
        delay: 0.5,
        scrub: 3
    })

    gsap.from("#page1 h1", {
      x: -500,
      duration: 2,
      delay: 0.5,
      scrub: 3
    })

    gsap.to("#page1 h3", {
      x: 10,
      duration: 1,
      delay: 0.5,
      stagger: 0.5
    })

}


locoScroll()
textSplitting()
gsapAnimation()