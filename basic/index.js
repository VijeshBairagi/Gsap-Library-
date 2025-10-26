// Syntax: gsap.to(target, {properties})
// gsap.to() - Element ko current state se final state tak animate karta hai

gsap.to("#box-1", {
  x: 300,           // 300px right move hoga
  duration: 2,      // 2 seconds mein
  rotation: 360,    // 360 degree rotate hoga
  scale: 1.5        // 1.5x bada hoga
});


/*
 Properties:
x, y - Horizontal/Vertical movement (pixels mein)
rotation - Degrees mein rotation
scale - Size change (1 = normal, 2 = double)
opacity - Transparency (0-1)
duration - Animation ki length (seconds mein)
delay - Animation start hone se pehle wait 
 */


/* gsap.from() Example
 Element fade-in effect */
gsap.from("#box-2", {
  opacity: 0,       // 0 se shuru hoga
  y: -100,          // 100px upar se aayega
  duration: 1.5 
});

// Current position: opacity 1, y: 0 pe aa jayega
