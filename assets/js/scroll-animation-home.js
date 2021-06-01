$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    scrub: .1,
  });

  // //Main pin
  var hero = gsap.timeline({
    scrollTrigger: {
      trigger: "html",
      start: "top top",
      end: "200% bottom",
      pin: ".hero",
      scrub: .3,
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
    .to(
      "#hero__item_1 h2",
      {
        transform: "translateY(-150%)",
        duration: duration2,
      },
      0
    )

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
    end: "center bottom",
    endTrigger: ".fret__ball",
    toggleClass: { targets: ".fret__title", className: "fret_pin" },
    markers: false,
    onLeave: () => $(".fret__title").css("bottom", $(".fret__ball").height() / 2),
    onEnter: () => $(".fret__title").css("bottom", 0),
    onEnterBack: () => $(".fret__title").css("bottom", 0),
  });
  ScrollTrigger.create({
    trigger: ".cards",
    start: "bottom bottom",
    end: "top 70%",
    endTrigger: ".fret__ball",
    toggleClass: { targets: ".fret__fake-bg", className: "fret_pin" },
    markers: false,
  });

  var ballAnimations = gsap.timeline({
    scrollTrigger: {
      trigger: ".fret__description_wrap",
      start: "top 50%",
      end: "top 20%",
      markers: false,
    },
  });
  ballAnimations
    .to(".fret__description", {
      transform: "translateY(0%)",
      opacity: "1",
    })
    .to(".fret__link", {
      transform: "translateY(0%)",
      opacity: "1",
    }, 0);

    
  var ballTitle = gsap.timeline({
    scrollTrigger: {
      trigger: ".fret__subtitle",
      start: "top 70%",
      end: "top 30%",
      markers: false,
    },
  });
  ballTitle
    .to(".fret__subtitle h2", {
      transform: "translateY(0%)",
    });
});
