jQuery(document).ready(function ($) {
  gsap.registerPlugin(ScrollTrigger);

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
      trigger: "html",
      start: "top top",
      end: "+=" + heroDur + " bottom",
      pin: ".hero",
      snap: 0.5,
      scrub: 0.1,
      markers: false,
    },
  });

  var duration = 1,
    duration2 = 2;

  if (mobile) {
    hero
      //image out
      .to(".hero__image_1 img", { height: "40%", duration: duration }, 0)
      .to(".hero__image_1", { right: "10%", duration: duration }, 0)
      .to(".hero__image_1", { yPercent: -100, duration: duration }, duration)
      //image in
      .to(".hero__image_2", { yPercent: -100, duration: duration2 }, 0.5)
      .to(
        ".hero__image_2 img",
        { height: "100%", duration: duration },
        duration * 2
      )
      .to(".hero__image_2", { right: "-10%", duration: duration }, duration * 2)
      //image out
      .to(
        ".hero__image_2 img",
        { height: "40%", duration: duration },
        duration * 3
      )
      .to(".hero__image_2", { right: "10%", duration: duration }, duration * 3)
      .to(
        ".hero__image_2",
        { yPercent: -200, duration: duration },
        duration * 4
      )
      //image in
      .to(
        ".hero__image_3",
        { yPercent: -100, duration: duration2 },
        duration * 3 + 0.5
      )
      .to(
        ".hero__image_3 img",
        { height: "100%", duration: duration },
        duration * 5
      )
      .to(
        ".hero__image_3",
        { right: "-10%", duration: duration },
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
      .to(".hero__image_1", { yPercent: -100, duration: duration }, duration)
      //image in
      .to(".hero__image_2", { yPercent: -100, duration: duration2 }, 0.5)
      .to(
        ".hero__image_2",
        { width: "100%", right: "-30%", duration: duration },
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
        { yPercent: -200, duration: duration },
        duration * 4
      )
      //image in
      .to(
        ".hero__image_3",
        { yPercent: -100, duration: duration2 },
        duration * 3 + 0.5
      )
      .to(
        ".hero__image_3",
        { width: "100%", right: "-30%", duration: duration },
        duration * 5
      );
    // //image out
  }

  hero

    //1 anim
    //text out
    .to(
      "#hero__item_1 h2",
      {
        yPercent: -150,
        duration: duration2,
      },
      0
    )

    //2 anim

    //text in
    .to(
      "#hero__item_2 h2",
      { yPercent: -150, duration: duration },
      duration * 2
    )

    //text out
    .to(
      "#hero__item_2 h2",
      { yPercent: -300, duration: duration2 },
      duration * 3
    )

    //3 anim

    //text in
    .to(
      "#hero__item_3 h2",
      { yPercent: -150, duration: duration },
      duration * 5
    )
    .to(
      ".hero__subtitle h3",
      { yPercent: -150, duration: duration },
      duration * 5
    );

  //CARDS PIN
  if (mobile) {
    ScrollTrigger.create({
      trigger: ".cards__wrap-all",
      start: "bottom bottom",
      end: "+=40% bottom",
      pin: true,
      pinSpacing: true,
      markers: false,
    });

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
  }
  //BALL ANIMATIONS
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

  //WHY TITLE
  var whyTitle = gsap.timeline({
    scrollTrigger: {
      trigger: ".why__title",
      start: "center 90%",
      end: "center 60%",
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
        start: "bottom bottom",
        end: "+300% bottom",
        markers: false,
        pin: true,
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
  var processTitle = gsap.timeline({
    scrollTrigger: {
      trigger: ".process__title",
      start: "bottom 90%",
      end: "bottom 60%",
      markers: false,
    },
  });
  processTitle
    .to(".process__title div:first-child h2", { transform: "translateY(0%)" })
    .to(
      ".process__title div:last-child h2",
      { transform: "translateY(0%)" },
      0.1
    );

  var banner = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner",
      start: "bottom bottom",
      end: "500% bottom",
      pin: ".process",
      markers: false,
    },
  });
  banner
    .to(".banner__title_1", { left: "-110%", duration: 1 })
    .to(".banner__title_2", { left: "0%", duration: 1 }, 0.2)
    .to(".banner__title_2", { top: "-110%", duration: 1 })
    .to(".banner__title_3", { top: "0%", duration: 1 }, 1.2)
    .to(".banner_wrap", { width: "80%", duration: 2.2 }, 0);

  var bannerHeight = $(".banner").height() * 4.5,
    bannerHeight2 =
      $(".banner").height() * 4 + $(".banner__background").height();
  if (!mobile) {
    bannerHeight = $(".banner").height() * 4;
    bannerHeight2 =
      $(".banner").height() * 4 + $(".banner__background").height();
  }

  var bannerBG = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner__background",
      start: bannerHeight + " bottom",
      end: bannerHeight2 + " top",
      markers: false,
    },
  });
  bannerBG.to(".banner__background", { objectPosition: "0% 100%" });

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
});