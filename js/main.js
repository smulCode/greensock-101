const runStart = () => {
  console.log("onStart");
}
const runUpdate = () => {
  console.log("onUpdate");
}
const runComplete = () => {
  console.log("onComplete");
}


const timeline =gsap.timeline({
  duration:1,
  paused:true,
  onStart:runStart,
  onUpdate:runUpdate,
  onComplete:runComplete,

});

timeline
    .from("body", {
      backgroundColor: "rgba(255,255,255)",
      duration: 1.7,
      ease: "none",
    })
    .fromTo(
      ["h1", ".intro"],
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, ease: "power1.out" },
    )
    .from(
      ["img", "h2"],
      { y: 0, opacity: 0,}
    )
    .fromTo(
      "ul li",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, ease:"power.out"}
      ,
    )

    const playButton = document.getElementById("btnPlay");

    playButton.addEventListener("click", () => {
      timeline.play();
    })

  