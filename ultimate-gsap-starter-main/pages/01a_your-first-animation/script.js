gsap.to(".card", {
  scale: 1,
  x: 100,
  repeat: 3,
  yoyo: true,
  duration: 2,
  onComplete: () => {
    gsap.to(".card", {
      x: -400,
      y: -100,
    });
  },
});
