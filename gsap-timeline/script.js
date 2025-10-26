// Timeline se multiple animations ko sequence mein control kar sakte ho:


// sequence  Code ----
/*
gsap.to("#box-1", {
  x: 1300,
  duration: 1.5,
  delay: 0.5
})
gsap.to("#box-2", {
  x: 1300,
  duration: 1.5,
  delay: 2
})
gsap.to("#box-3", {
  x: 1300,
  duration: 1.5,
  delay: 3.5
})
*/

//  sequence and readbal code 

const tl = gsap.timeline()
tl.to("#box-1", {
  x : 1200,
  ratate : 360 ,
  duratioon : 1.5,
  delay : 1
})
tl.to("#box-2", {
  x : 1200,
  ratate : 360 ,
  duratioon : 1.5,
})
tl.to("#box-3", {
  x : 1200,
  ratate : 360 ,
  duratioon : 1.5,
 })



const t2 = gsap.timeline()
t2.from("h2",{
  y : -30,
  opacity : 0,
  duratioon: 1,
  delay : 0.5 
})
t2.from("h4",{
  y : -30,
  opacity : 0,
  duratioon: 1,
  stagger : 0.3
})


