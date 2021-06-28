jQuery(document).ready(function ($) {
  gsap.registerPlugin(ScrollTrigger);

  $(".hero__item").css("opacity", 1);

  var windo = $(window);
  var mobile = windo.width() > 800;

  if (mobile) {
    $(".process__bottom").css("margin-top", $(".banner").height() / -2);
  }

  ScrollTrigger.defaults({
    scrub: 0.1,
  });

  var heroDur = $(window).height() * 2;
  if (mobile) {
    heroDur = $(window).height() * 3;
  }
  // //Main pin
  var hero = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom bottom",
      snap: 0.5,
      scrub: 0.1,
      markers: false,
    },
    defaults: {
      ease: Linear.easeNone,
    },
  });

  if (mobile) {
    hero
      //image out
      .to(".hero__image_1 img", { height: "40%", duration: 1 }, 0)
      .to(".hero__image_1", { right: "10%", duration: 1 }, 0)
      .to(".hero__image_1", { yPercent: -100, duration: 1 }, 1)
      //image in
      .fromTo(
        ".hero__image_2",
        { yPercent: 100 },
        { yPercent: 0, duration: 2 },
        0.5
      )
      .to(".hero__image_2 img", { height: "100%", duration: 1 }, 2)
      .to(".hero__image_2", { right: "-10%", duration: 1 }, 2)
      //image out
      .to(".hero__image_2 img", { height: "40%", duration: 1 }, 3)
      .to(".hero__image_2", { right: "10%", duration: 1 }, 3)
      .to(".hero__image_2", { yPercent: -100, duration: 1 }, 4)
      //image in
      .fromTo(
        ".hero__image_3",
        { yPercent: 100 },
        { yPercent: 0, duration: 2 },
        3 + 0.5
      )
      .to(".hero__image_3 img", { height: "100%", duration: 1 }, 5)
      .to(".hero__image_3", { right: "-10%", duration: 1 }, 5)

      //1 anim
      //text out
      .to(
        "#hero__item_1 h2",
        {
          yPercent: -140,
          duration: 2,
        },
        0
      )

      //2 anim

      //text in
      .fromTo(
        "#hero__item_2 h2",
        { yPercent: 140 },
        { yPercent: 0, duration: 1 },
        2
      )

      //text out
      .to("#hero__item_2 h2", { yPercent: -140, duration: 2 }, 3)

      //3 anim

      //text in
      .fromTo(
        "#hero__item_3 h2",
        { yPercent: 140 },
        { yPercent: 0, duration: 1 },
        5
      )
      .fromTo(
        ".hero__subtitle h3",
        { yPercent: 140 },
        { yPercent: 0, duration: 1 },
        5
      );
  } else {
    ScrollTrigger.create({
      trigger: ".hero",
      start: "bottom bottom",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });

    hero
      //image out
      .to(".hero__image_1", { width: "70%", right: "0%", duration: 1 }, 0)
      .to(".hero__image_1", { yPercent: -100, duration: 1 }, 1)
      //image in
      .fromTo(
        ".hero__image_2",
        { yPercent: 40, scale: 0 },
        { scale: 1, duration: 1 },
        0
      )
      .to(".hero__image_2", { yPercent: 0, right: "-20%", duration: 1 }, 1)
      //image out
      .to(".hero__image_2", { width: "70%", right: "0%", duration: 1 }, 2)
      .to(".hero__image_2", { yPercent: -100, duration: 1 }, 3)
      //image in
      .fromTo(
        ".hero__image_3",
        { yPercent: 40, scale: 0 },
        { scale: 1, duration: 1 },
        2
      )
      .to(".hero__image_3", { yPercent: 0, right: "-20%", duration: 1 }, 3)
      // //image out

      //1 anim
      //text out
      .fromTo(
        "#hero__item_1 h2",
        { yPercent: 0 },
        {
          yPercent: -140,
          duration: 1,
        },
        0
      )

      //2 anim

      //text in
      .fromTo(
        "#hero__item_2 h2",
        { yPercent: 140 },
        { yPercent: 0, duration: 1 },
        1
      )

      //text out
      .to("#hero__item_2 h2", { yPercent: -140, duration: 1 }, 2)

      //3 anim

      //text in
      .fromTo(
        "#hero__item_3 h2",
        { yPercent: 140 },
        { yPercent: 0, duration: 1 },
        3
      )
      .fromTo(
        ".hero__subtitle h3",
        { yPercent: 140 },
        { yPercent: 0, duration: 1 },
        3
      );
  }

  //CARDS PIN
  if (mobile) {
    //FRET NOT TITLE PIN
    ScrollTrigger.create({
      trigger: ".cards",
      start: "80% bottom",
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
      start: "80% bottom",
      end: "top 70%",
      endTrigger: ".fret__ball",
      toggleClass: { targets: ".fret__fake-bg", className: "fret_pin" },
      markers: false,
    });
  } else {
    gsap.to(".cards_space", {
      height: "20%",
      scrollTrigger: {
        trigger: ".cards",
        start: "bottom bottom",
        end: "bottom top",
      },
    });
  }
  //BALL ANIMATIONS
  if (!mobile) {
    gsap.from(".fret__fake-bg", {
      scale: 2,
      scrollTrigger: {
        trigger: ".fret__ball",
        start: "center bottom",
        end: "center 70%",
      },
    });
  }

  var ballAnimations = gsap.timeline({
    scrollTrigger: {
      trigger: ".fret__description_wrap",
      start: "top 80%",
      end: "top 30%",
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
      start: "top 80%",
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

  if (!mobile) {
    gsap.to(".do__flex", {
      yPercent: -10,
      ease: Linear.easeNone,
      scrollTrigger: {
        trigger: ".why",
        start: "top center",
        end: "top top",
        pin: ".do__flex",
        pinSpacing: false,
      },
    });
  }
  //WHY TITLE
  var whyTitle = gsap.timeline({
    scrollTrigger: {
      trigger: ".why",
      start: "top 50%",
      end: "top 30%",
      markers: false,
    },
  });
  whyTitle
    .to(".why__title div:first-child h2", {
      transform: "translateY(0%)",
    })
    .to(
      ".why__title div:last-child h2",
      {
        transform: "translateY(0%)",
      },
      0.2
    );

  //WHY PIN
  if (mobile) {
    let WhySectionsAnim1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".why",
        start: "+=" + $(".why_sticky").height() + " bottom",
        end: "bottom bottom",
        markers: false,
      },
    });
    var widthImage = "13vw",
      widthText = "25vw",
      imagePadding = "16px",
      dur = 1,
      del = "+=.5";

    WhySectionsAnim1.to(
      "#slide-1-img",
      {
        width: "0",
        paddingLeft: 0,
        duration: dur,
      },
      "+=.2"
    )
      .to("#slide-1-text", { maxWidth: "0", width: "0", duration: dur }, "<")
      .to(
        "#slide-2-img",
        { width: widthImage, paddingLeft: imagePadding, duration: dur },
        "<"
      )
      .to(
        "#slide-2-text",
        { maxWidth: widthText, width: widthText, duration: dur },
        "<"
      )

      .to("#slide-2-img", { width: "0", paddingLeft: 0, duration: dur }, del) ////////////////
      .to("#slide-2-text", { maxWidth: "0", width: "0", duration: dur }, "<")
      .to(
        "#slide-3-img",
        {
          width: widthImage,
          paddingLeft: imagePadding,
          duration: dur,
        },
        "<"
      )
      .to(
        "#slide-3-text",
        { maxWidth: widthText, width: widthText, duration: dur },
        "<"
      )

      .to("#slide-3-img", { width: "0", paddingLeft: 0, duration: dur }, del) //////////////////
      .to("#slide-3-text", { maxWidth: "0", width: "0", duration: dur }, "<")
      .to(
        "#slide-4-img",
        { width: widthImage, paddingLeft: imagePadding, duration: dur },
        "<"
      )
      .to(
        "#slide-4-text",
        { maxWidth: widthText, width: widthText, duration: dur },
        "<"
      );
  } else {
    var slides = gsap.timeline({
      scrollTrigger: {
        trigger: ".why",
        start: "+=" + $(".why_sticky").height() + " bottom",
        end: "bottom bottom",
      },
      defaults: {
        ease: Linear.easeNone,
      },
    });
    slides
      .to(".slide", { xPercent: -100 + 100 / 4 })
      .to(".why__background", { yPercent: -50 }, 0);
  }

  //CLIENTS SUBTITLE ANIMATION
  var clients = gsap.timeline({
    scrollTrigger: {
      trigger: ".clients__subtitle",
      start: "top 80%",
      end: "top 50%",
      markers: false,
    },
  });
  clients.to(".clients__subtitle div", { transform: "translateY(0%)" });

  //Process ANIMATION
  if (mobile) {
    var processTitle = gsap.timeline({
      scrollTrigger: {
        trigger: ".process",
        start: "+=" + $(".process__title").height() + " 90%",
        end: "+=" + $(".process__title").height() + " 60%",
        markers: false,
      },
    });
    processTitle
      .fromTo(
        ".process__title div:first-child h2",
        { yPercent: 130 },
        { yPercent: 0 }
      )
      .fromTo(
        ".process__title div:last-child h2",
        { yPercent: 130 },
        { yPercent: 0 },
        0.1
      );
  } else {
    gsap.from(".process__title h2", {
      xPercent: 30,
      scrollTrigger: {
        trigger: ".process",
        start: "+=64 bottom",
        end: "+=64 center",
        markers: false,
      },
    });
  }

  var bannerHeight = $(".banner").height(),
    bgHeigh = $(".banner__background").height();
  var prEH = bgHeigh - bannerHeight / 2;
  var prEHP = bgHeigh + bannerHeight / 2;
  if (mobile) {
    $(".process_sticky").css("bottom", -prEH - 6);
  } else {
    prEH = bgHeigh;
    prEHP = bgHeigh;
    $(".process_sticky").css("bottom", -bgHeigh - 6);
  }
  var banner = gsap.timeline({
    scrollTrigger: {
      trigger: ".process",
      start: "+=" + ($(".process_sticky").height() - prEH) + " bottom",
      end: "bottom-=" + prEH + " bottom",
      markers: false,
    },
  });
  banner
    .to(".banner__title_1", { left: "-110%", duration: 1 })
    .to(".banner__title_2", { left: "0%", duration: 1 }, 0.2)
    .to(".banner__title_2", { top: "-110%", duration: 1 })
    .to(".banner__title_3", { top: "0%", duration: 1 }, 1.2)
    .fromTo(
      ".banner_wrap",
      { width: "100%" },
      { width: "80%", duration: 2.2 },
      0
    );

  if (!mobile) {
    banner.to(".banner__background", { height: "100vh", bottom: "100%" });
    gsap.fromTo(
      ".banner__background",
      { height: "100vh", bottom: "100%" },
      {
        height: "100%",
        bottom: 0,
        immediateRender: false,
        scrollTrigger: {
          trigger: ".process",
          start: "bottom-=" + $(".banner__bg_wrap").height() + " bottom",
          end: "bottom bottom",
        },
      }
    );
  }

  if (mobile) {
    var bannerBG = gsap.timeline({
      scrollTrigger: {
        trigger: ".process",
        start: "bottom-=" + prEH + " bottom",
        end: "bottom top",
        markers: false,
      },
    });
    bannerBG.to(".banner__background", { objectPosition: "0% 100%" });
  }

  //CONTACT ANIMATION

  var contact = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact__block",
      start: "top 80%",
      end: "top 40%",
      markers: false,
    },
  });
  contact.to(".contact__block", { width: "20%" });

  if (!mobile) {
    gsap.from(".contact__ball", {
      xPercent: -100,
      scrollTrigger: {
        trigger: ".contact__ball",
        start: "top 80%",
        end: "top 50%",
      },
    });
  }
});
