const main = document.querySelector(".main")
const cursor = document.querySelector(".cursor")
const image =document.querySelector(".image")

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 0.6,
    ease: "power2.out",
  })
})
image.addEventListener("mouseenter", (e) => {
  cursor.innerHTML ="View Image"
  gsap.to(cursor, {
    scale: 3  ,
    duration: 0.6,
    ease: "power2.out",
    backgroundColor: "rgba(255,255,255,0.2)",
  })
  console.log("mouse Enter");
})

image.addEventListener("mouseleave", (e) => {
  cursor.innerHTML =""
  gsap.to(cursor, {
    scale: 1, 
    duration: 0.6,
    ease: "power2.out",
    backgroundColor: "#fff",

  })
})
