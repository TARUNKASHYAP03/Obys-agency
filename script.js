let tl = gsap.timeline();

tl.from(".line h1,p", {
  y: 150,
  stagger: 0.45,
  duration: 0.6,
  delay: 0.5,
});

tl.from("#lineload", {
  opacity: 0,
  onStart: function() {
    let h5timer = document.querySelector(".line h5");
    let grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 25);
  }
});

tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})

tl.to("#loader", {
  opacity: 0,
  duration: 0.3,
  delay: 3,
});

tl.from("#page1",{
    delay:0.2,
    y:1600,
    duration:0.5,
    opacity:0,
    ease:Power4
})

tl.to("#loader",{
    display:"none"
})