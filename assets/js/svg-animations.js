$(document).ready(function () {

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
  blackCircle = $(".do__anim_brand_ball"),
  redCircle = $(".do__anim_brand_small-ball"),
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
  .to(blackCircle, { x: "-20%", y: "10%" })
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
var webGreenArrow = $(".do__anim_web_arrow"),
  webGreenDiv = $(".do__anim_web_div"),
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

  .to(webGreenDiv, { rotation: -20 }, 0)
  .to(webGreenDiv, { rotation: 5 }, durationWeb)
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
var digitalMan = $(".do__anim_digital_man"),
  digitalPlanet = $(".do__anim_digital_planet"),
  crossTop = $(".do__cross_top"),
  crossLeft = $(".do__cross_left"),
  crossRight = $(".do__cross_right"),
  crossBottom = $(".do__cross_bottom"),
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
    gsap.to(DigitalAnim, { timeScale: timeScaleDigital, duration: StopDuration });
  }
)


});