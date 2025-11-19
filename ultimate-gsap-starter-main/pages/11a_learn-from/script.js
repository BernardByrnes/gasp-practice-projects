import { gsap } from "gsap";

const repeat = document.querySelector(".repeat");

const Animation = gsap.from(".card", {
  y: 60,
  autoAlpha: 0,
  scale: 0.85,
  duration: 0.6,
  stagger: {
    amount: 1,
  },
  // delay: 0.2,
  ease: "power4.out",
});

repeat.addEventListener("click", () => {
  Animation.restart();
});

// gsap.from(".card-2", {
//   y: 60,
//   autoAlpha: 0,
//   scale: 0.85,
//   duration: 0.6,
//   delay: 0.5,
//   ease: "power4.out",
// });
// gsap.from(".card-3", {
//   y: 60,
//   autoAlpha: 0,
//   scale: 0.85,
//   duration: 0.6,
//   delay: 0.8,
//   ease: "power4.out",
// });
