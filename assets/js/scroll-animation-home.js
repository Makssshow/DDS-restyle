$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    scrub: 0.3,
  });

  // //Main pin
  var hero = gsap.timeline({
    scrollTrigger: {
      trigger: "html",
      start: "top top",
      end: "300% bottom",
      pin: ".hero",
      markers: false,
    },
  });

  var duration = 1,
    duration2 = 2;

  if ($(window).width() > 700) {
    hero
      //image out
      .to(
        ".hero__image_1",
        { height: "40%", right: "10%", duration: duration },
        0
      )
      .to(".hero__image_1", { bottom: "130%", duration: duration }, duration)
      //image in
      .to(".hero__image_2", { bottom: "50%", duration: duration2 }, 0.3)
      .to(
        ".hero__image_2",
        { height: "100%", right: "-10%", duration: duration },
        duration * 2
      )
      //image out
      .to(
        ".hero__image_2",
        { height: "40%", right: "10%", duration: duration },
        duration * 3
      )
      .to(
        ".hero__image_2",
        { bottom: "130%", duration: duration },
        duration * 4
      )
      //image in
      .to(
        ".hero__image_3",
        { bottom: "50%", duration: duration2 },
        duration * 3 + 0.3
      )
      .to(
        ".hero__image_3",
        { height: "100%", right: "-10%", duration: duration },
        duration * 5
      );
  } else {
    hero
      //image out
      .to(
        ".hero__image_1",
        { width: "40%", right: "10%", duration: duration },
        0
      )
      .to(".hero__image_1", { bottom: "130%", duration: duration }, duration)
      //image in
      .to(".hero__image_2", { bottom: "50%", duration: duration2 }, 0.3)
      .to(
        ".hero__image_2",
        { width: "130%", right: "-30%", duration: duration },
        duration * 2
      )
      //image out
      .to(
        ".hero__image_2",
        { width: "40%", right: "10%", duration: duration },
        duration * 3
      )
      .to(
        ".hero__image_2",
        { bottom: "130%", duration: duration },
        duration * 4
      )
      //image in
      .to(
        ".hero__image_3",
        { bottom: "50%", duration: duration2 },
        duration * 3 + 0.3
      )
      .to(
        ".hero__image_3",
        { width: "130%", right: "-30%", duration: duration },
        duration * 5
      );
  }

  hero

    //1 anim
    //text out
    .to("#hero__item_1 h2", {
      transform: "translateY(-150%)",
      duration: duration2,
    }, 0)

    //2 anim

    //text in
    .to(
      "#hero__item_2 h2",
      { transform: "translateY(0%)", duration: duration },
      duration * 2
    )

    //text out
    .to(
      "#hero__item_2 h2",
      { transform: "translateY(-150%)", duration: duration2 },
      duration * 3
    )

    //3 anim

    //text in
    .to(
      "#hero__item_3 h2",
      { transform: "translateY(0%)", duration: duration },
      duration * 5
    )
    .to(
      ".hero__subtitle h3",
      { transform: "translateY(0%)", duration: duration },
      duration * 5
    );


    ScrollTrigger.create({
      trigger: ".cards",
      start: "bottom bottom",
      end: "top top",
      endTrigger: ".fret",
      toggleClass: {targets: ".fret__title", className: "fret_pin"},
      markers: false
    });
    ScrollTrigger.create({
      trigger: ".cards",
      start: "bottom bottom",
      end: "top center",
      endTrigger: ".fret",
      toggleClass: {targets: ".fret__fake-bg", className: "fret_pin"},
      markers: false
    });
});
