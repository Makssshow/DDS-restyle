//Small ball anim
var leftBall = $(".fret__anim_left"),
  rightBall = $(".fret__anim_red-circle"),
  redPlanet = $(".fret__anim_red-ball"),
  manBall = $(".fret__anim_man"),
  small = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
    defaults: {
      duration: 3,
      ease: "power1.inOut",
    },
  });

small
  .to(leftBall, { x: "20%" })

  .to(rightBall, { x: "-20%" }, 0)

  .to(manBall, { x: "-200%" }, 0)

  .to(redPlanet, { scale: "1.1" }, 0);

//BRANDING
var StopDuration = 1,
  blackCircle = $(".branding-anim-ball"),
  redCircle = $(".branding-anim-red-ball"),
  timeScaleBranding = 1,
  durationBrand = 1.5;
branding = gsap.timeline({
  repeat: -1,
  defaults: {
    duration: durationBrand,
    ease: "power3.out",
    timeScale: timeScaleBranding,
  },
});

branding
  .to(blackCircle, { x: "-30%", y: "20%" })
  .to(blackCircle, { y: "-20%" })
  .to(blackCircle, { y: "0", x: "0" })

  .to(redCircle, { width: "50%" }, 0)
  .to(redCircle, { right: "80%", width: "20px" }, durationBrand)
  .to(redCircle, { right: "10%" }, durationBrand * 2);

$("#branding").hover(
  function () {
    gsap.to(branding, { timeScale: 0, duration: StopDuration });
  },
  function () {
    gsap.to(branding, { timeScale: timeScaleBranding, duration: StopDuration });
  }
);

//Web development
var webGreenArrow = $(".green-arrow-anim-web"),
  webGreenDiv = $(".web-green-block-anim-div"),
  timeScaleWeb = 1,
  durationWeb = 1.5;
webAnim = gsap.timeline({
  repeat: -1,
  defaults: {
    duration: durationWeb,
    ease: "power3.out",
    timeScale: timeScaleWeb,
  },
});

webAnim
  .from(webGreenArrow, { top: "70%" })
  .to(webGreenArrow, { top: "70%" }, durationWeb * 3)

  .to(webGreenDiv, { rotation: -25 }, 0)
  .to(webGreenDiv, { rotation: 10 }, durationWeb)
  .to(webGreenDiv, { rotation: -10 }, durationWeb * 2)
  .to(webGreenDiv, { rotation: -25 }, durationWeb * 3);

$("#web-dev-anim").hover(
  function () {
    gsap.to(webAnim, { timeScale: 0, duration: StopDuration });
  },
  function () {
    gsap.to(webAnim, { timeScale: timeScaleWeb, duration: StopDuration });
  }
);

//Digital anim
var digitalMan = $(".digital-man-anim"),
  digitalPlanet = $(".digital-planet-anim"),
  crossTop = $(".digital-cross-top"),
  crossLeft = $(".digital-cross-left"),
  crossRight = $(".digital-cross-right"),
  crossBottom = $(".digital-cross-bottom"),
  timeScaleDigital = 1,
  durationDigital = 1.5;
DigitalAnim = gsap.timeline({
  repeat: -1,
  defaults: {
    duration: durationDigital,
    ease: "power3.out",
    timeScale: timeScaleDigital,
  },
});

DigitalAnim.to(digitalMan, { x: 30, y: -30 })
  .to(digitalPlanet, { x: 30, y: -30 }, 0)
  .to(digitalMan, { x: 0, y: -60 })
  .to(digitalPlanet, { x: 60, y: 0 }, durationDigital)
  .to(digitalMan, { x: 0, y: 0 })
  .to(digitalPlanet, { x: 0, y: 0 }, durationDigital * 2)

  .to(crossRight, durationDigital * 2, { width: "24px" }, 0)
  .to(crossTop, durationDigital * 2, { height: "24px" }, 0)
  .to(crossLeft, durationDigital * 2, { width: "24px" }, 0)
  .to(crossBottom, durationDigital * 2, { height: "24px" }, 0)

  .to(crossRight, durationDigital * 2, { width: "12px" }, durationDigital)
  .to(crossTop, durationDigital * 2, { height: "12px" }, durationDigital)
  .to(crossLeft, durationDigital * 2, { width: "12px" }, durationDigital)
  .to(crossBottom, durationDigital * 2, { height: "12px" }, durationDigital);

$("#digital-anim").hover(
  function () {
    gsap.to(DigitalAnim, { timeScale: 0, duration: StopDuration });
  },
  function () {
    gsap.to(DigitalAnim, { timeScale: timeScaleMark, duration: StopDuration });
  }
);

// //marketing anim
// var markSun = $(".marketing-sun-block"),
//   markBlocks = $(".marketing-top-block, .marketing-bottom-block"),
//   timeScaleMark = 1,
//   durationMark = 1;
// MarkAnim = gsap.timeline({
//   repeat: -1,
//   defaults: {
//     duration: durationMark,
//     ease: "power3.out",
//     timeScale: timeScaleMark,
//   },
// });

// MarkAnim
// .to(markSun, { width: "20px", height: "20px" })
// .to(markSun, {  width: "12px", height: "12px"  })
// .to(markSun, {  width: "22px", height: "22px"  })
// .to(markSun, {  width: "12px", height: "12px"  })
// .to(markSun, {  width: "50px", height: "50px"  })
// .to(markSun, {  width: "12px", height: "12px"  })

// .to(markBlocks, durationMark * 2, { opacity: "0" }, 0)
// .to(markBlocks, durationMark * 2, { opacity: ".5" }, durationMark * 2)
// .to(markBlocks, durationMark * 2, { opacity: "0" }, durationMark * 4)
// .to(markBlocks, durationMark * 2, { opacity: ".5" }, durationMark * 6);

// $("#marketing-anim").hover(
//   function () {
//     gsap.to(MarkAnim, { timeScale: 0, duration: StopDuration });
//   },
//   function () {
//     gsap.to(MarkAnim, { timeScale: timeScaleMark, duration: StopDuration });
//   }
// );
