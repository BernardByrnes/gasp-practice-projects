import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelectorAll(".tab");
const tabRow = document.querySelectorAll(".tab");

const updateIndicator = (target) => {
  const tabBounds = target.getBoundingClientRect();
  const rowBounds = tabRow.getBoundingClientRect();

  const width = tabBounds.width;
  const offset = tabBounds.left - rowBounds.left;

  gsap.to(indicator),
    {
      x: offset,
      width: width,
      duration: 0.4,
      ease: "back.out(1.7)",
    };
};
