$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    scrub: 0.1,
  });

  // //Main pin
  var hero = gsap.timeline({
    scrollTrigger: {
      trigger: "html",
      start: "top top",
      end: "40% bottom",
      pin: ".hero",
      scrub: 0.3,
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

  //CARDS PIN
  if ($(window).width() > 700) {
    ScrollTrigger.create({
      trigger: ".cards__wrap-all",
      start: "bottom bottom",
      end: "bottom bottom",
      endTrigger: ".cards",
      pin: true,
      pinSpacing: false,
      markers: false,
    });

    //FRET NOT TITLE PIN
    ScrollTrigger.create({
      trigger: ".cards",
      start: "bottom bottom",
      end: "center bottom",
      endTrigger: ".fret__ball",
      toggleClass: { targets: ".fret__title", className: "fret_pin" },
      markers: false,
      onLeave: () =>
        $(".fret__title").css("bottom", $(".fret__ball").height() / 2),
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
  }
  //BALL ANIMATIONS
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
    .to(
      ".fret__link",
      {
        transform: "translateY(0%)",
        opacity: "1",
      },
      0
    );

  var ballTitle = gsap.timeline({
    scrollTrigger: {
      trigger: ".fret__subtitle",
      start: "top 70%",
      end: "top 30%",
      markers: false,
    },
  });
  ballTitle.to(".fret__subtitle h2", {
    transform: "translateY(0%)",
  });

  //DO TITLE
  var doTitle = gsap.timeline({
    scrollTrigger: {
      trigger: ".do__title",
      start: "top 70%",
      end: "top 30%",
      markers: false,
    },
  });
  doTitle
    .to(".do__title div:nth-child(1) h2", {
      transform: "translateY(0%)",
    })
    .to(".do__title div:nth-child(2) h2", {
      transform: "translateY(0%)",
    })
    .to(".do__title div:nth-child(3) h2", {
      transform: "translateY(0%)",
    });

  //WHY TITLE
  var whyTitle = gsap.timeline({
    scrollTrigger: {
      trigger: ".why__title",
      start: "bottom 90%",
      end: "bottom 60%",
      markers: false,
    },
  });
  whyTitle.to(".why__title h2", {
    transform: "translateY(0%)",
  });

  //WHY PIN
  if ($(window).width() > 700) {
    let WhySectionsAnim1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".why",
        start: "bottom bottom",
        end: "+300% bottom",
        markers: false,
        pin: true,
      },
    });
    var widthImage = "10vw",
      widthText = "25vw";

    WhySectionsAnim1.to("#slide-1-img", { width: "0", duration: 0.33 })
      .to("#slide-1-text", { width: "0", duration: 0.33 }, 0)
      .to("#slide-2-img", { width: widthImage, duration: 0.33 }, 0)
      .to("#slide-2-text", { width: widthText, duration: 0.33 }, 0)

      .to("#slide-2-img", { width: "0", duration: 0.33 })
      .to("#slide-2-text", { width: "0", duration: 0.33 }, 0.33)
      .to("#slide-3-img", { width: widthImage, duration: 0.33 }, 0.33)
      .to("#slide-3-text", { width: widthText, duration: 0.33 }, 0.33)

      .to("#slide-3-img", { width: "0", duration: 0.33 })
      .to("#slide-3-text", { width: "0", duration: 0.33 }, 0.66)
      .to("#slide-4-img", { width: widthImage, duration: 0.33 }, 0.66)
      .to("#slide-4-text", { width: widthText, duration: 0.33 }, 0.66);
  }

  //CLIENTS SUBTITLE ANIMATION
  var clients = gsap.timeline({
    scrollTrigger: {
      trigger: ".clients__subtitle",
      start: "top 80%",
      end: "top 50%",
      markers: true,
    },
  });
  clients.to(".clients__subtitle div", { transform: "translateY(0%)" });
});
