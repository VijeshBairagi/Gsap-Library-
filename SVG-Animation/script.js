let initalPath = `M 10 100 Q 710 100 1420 100`;
let finalPath = `M 10 100 Q 710 100 1420 100`;
let string = document.querySelector(".string")

string.addEventListener("mousemove", (dets) => {
  initalPath = `M 10 100 Q ${dets.x} ${dets.y} 1420 100`
  gsap.to("svg path", {
    attr: { d: initalPath },
    duration: 0.3,
    ease: "power1.out"
  })
})

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.4,
    ease: "elastic.out(1,0.1)"
  })
}) 
