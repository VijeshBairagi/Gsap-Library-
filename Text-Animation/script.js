function breakTheText() {
  let h1 = document.querySelector("h1")
  let h1Text = h1.textContent
  const textsplit = h1Text.split("")
  const textHalf = textsplit.length / 2
  let clutter = ""
  console.log(h1);

  textsplit.forEach((elem, index) => {
    if (index < textHalf) {
      clutter += `<span class="a">${elem}</span>`
    } else {
      clutter += `<span class="b">${elem}</span>`
    }
    h1.innerHTML = clutter
  })
}

breakTheText()

  gsap.from("h1 .a", {
    y: 80,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0
  })

gsap.from("h1 .b", {
  y: 80,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
  opacity: 0
})

