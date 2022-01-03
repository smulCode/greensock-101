gsap.from("body", {
  backgroundColor: "rgba(255,255,255)",
  duration: 1.7,
  ease: "none",
});

gsap.fromTo(
  ["h1", ".intro"],
  { y: -40, opacity: 0 },
  { y: 0, opacity: 1, duration: 2, stagger: 0.1, ease: "expo" }
);

gsap.fromTo(
  ["img", "h2"],
  { y: -40, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.5, delay: 2 }
);

gsap.fromTo(
  ["ul"],
  { y: -40, opacity: 0 },
  { y: 0, opacity: 1, duration: 2, delay: 2, stagger: 0.1 }
);

gsap.fromTo(
  "li",
  { y: 0, opacity: 0 },
  { y: 0, opacity: 1, duration: 2, delay: 4, stagger: 0.1 }
);
