$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    scrub: .3,
  });

  // //Main pin
  // ScrollTrigger.create({
  //   trigger: "html",
  //   start: "top bottom",
  //   end: "bottom bottom",
  //   endTrigger: ".main-section-wrapper",
  //   onLeave() {
  //     $(".main-bg-wrapper").removeClass("pinned-main-bg");
  //     $(".green-circle").removeClass("pinned-green-ball");
  //   },
  //   onEnterBack() {
  //     $(".main-bg-wrapper").addClass("pinned-main-bg");
  //     $(".green-circle").addClass("pinned-green-ball");
  //   },
  //   markers: false,
  // });

  var hero = gsap.timeline({
    scrollTrigger: {
      trigger: "html",
      start: "top top",
      end: "300% bottom",
      pin: ".hero",
      markers: true,
    },
  });

var duration = 1,
 duration2 = 2;

  hero
  //1 anim
  //text out
  .to("#hero__item_1 h2", { transform: "translateY(-130%)", duration: duration2 })
  //image out
  .to(".hero__image_1", {width: "30%", left: "50%", duration: duration}, 0) 
  .to(".hero__image_1", {bottom: "130%", duration: duration}, duration) 

  //2 anim

  //image in
  .to(".hero__image_2", {bottom: "50%",  duration: duration2}, .3) 
  .to(".hero__image_2", {width: "120%", left: "0%",  duration: duration}, duration * 2) 
  //text in
  .to("#hero__item_2 h2", { transform: "translateY(0%)", duration: duration }, duration * 2)
  //image out
  .to(".hero__image_2", {width: "30%", left: "50%", duration: duration}, duration * 3) 
  .to(".hero__image_2", {bottom: "130%", duration: duration}, duration * 4) 
  //text out
  .to("#hero__item_2 h2", { transform: "translateY(-130%)", duration: duration2 }, duration * 3)

  //3 anim
    //image in
    .to(".hero__image_3", {bottom: "50%",  duration: duration2}, (duration * 3) + .3) 
    .to(".hero__image_3", {width: "120%", left: "0%",  duration: duration}, duration * 5) 
    //text in
    .to("#hero__item_3 h2", { transform: "translateY(0%)", duration: duration }, duration * 5)
    .to(".hero__subtitle h3", { transform: "translateY(0%)", duration: duration }, duration * 5);
});