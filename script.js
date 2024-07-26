function loaderAnimation() {
  let tl = gsap.timeline();

  tl.from(".line h1,p", {
    y: 150,
    stagger: 0.45,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#lineload", {
    opacity: 0,
    onStart: function () {
      let h5timer = document.querySelector(".line h5");
      let grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 5);
    },
  });

  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.3,
    delay: 2,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    duration: 0.5,
    opacity: 0,
    ease: Power4,
  });

  tl.from("#navbar",{
    opacity:0
  })

  tl.to("#loader", {
    display: "none",
  });

  tl.from("#cont1 h1,#cont2 h1,#cont3 h2,#cont4 h1",{
    y:120,
    stagger:0.2
  })
}

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });

  Shery.makeMagnet("#navinfo h4");
}

loaderAnimation();
cursorAnimation();
