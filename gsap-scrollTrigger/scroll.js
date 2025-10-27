
gsap.from(".box1 .box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360
});

gsap.from(".box2 .box", {
  scale: 0,
  duration: 1,
  opacity : 0,
  rotate: 720,
  scrollTrigger: {
      trigger : " .box2 .box",
      scroller : "body ",
      markers : true,
      start : "top 90%",
      end :  "top 10%",
      scrub : true ,  // bollean and 0, 5 number 
      // pin : true  
  }
});
gsap.from(".box3 .box", {
  scale: 0,
  x : -800,
  duration: 1,
  opacity : 0,
  rotate: 360,
  scrollTrigger: {
      trigger : " .box3 .box",
      scroller : "body ",
      markers : true,
      start : "top 90%",
      end :  "top 50%",
      scrub : true ,  // bollean and 0, 5 number 
      // pin : true  
  }
});


