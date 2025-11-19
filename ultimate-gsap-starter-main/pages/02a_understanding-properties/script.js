import gsap from "gsap";
gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  background: "#ff6f61",
  borderRadius: "50%",
  scale: 1,
  y: 100,
  duration: 1,
  // delay: 2,
  ease: "bounce",
  stagger: {
    amount: 3,
  },
});
