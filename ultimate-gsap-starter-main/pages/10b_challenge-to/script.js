import { gsap } from "gsap";

const showToastPoop = () => {
  gsap.to(".one", {
    y: -200,
    scale: 1.2,
    duration: 0.8,
    ease: "back.inOut",
    onComplete: () => {
      gsap.to(".two", {
        y: -300,
        scale: 1.2,
        duration: 0.8,
        ease: "back.inOut",
        onComplete: () => {
          gsap.to(".two", {
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: 1,
            ease: "back.inOut",
          });
        },
      });
    },
  });
};

showToastPoop();
