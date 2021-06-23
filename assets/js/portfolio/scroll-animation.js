jQuery(document).ready(function ($) {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    scrub: 0.05,
  });

  if ($(window).width() > 1050) {
    ///////////////////////////////////HERO
    //Hero background pin
    ScrollTrigger.create({
      trigger: "html",
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".hero",
      pin: ".main",
      pinSpacing: false,
      markers: false,
    });

    //hero about pin
    ScrollTrigger.create({
      trigger: ".hero__title",
      start: "top top",
      end: "top center",
      endTrigger: ".hero__wrap",
      pin: true,
      pinSpacing: false,
      markers: false,
    });

    //hero title moves up
    gsap.to(".hero__title", {
      yPercent: -50,
      scrollTrigger: {
        trigger: ".hero__wrap",
        start: "top center",
        end: "center center",
        markers: false,
      },
    });

    $(".pin")
      .imagesLoaded()
      .done(function (instance) {
        //PIN GREEN BORDER
        ScrollTrigger.create({
          trigger: ".pin__background",
          start: "top top",
          endTrigger: ".pin img:last-child",
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          markers: false,
        });
      });
  }

  $(".anim_right")
    .imagesLoaded()
    .done(function (instance) {
      //ANIM RIGHT
      var move_right = gsap.utils.toArray(".anim_right");
      move_right.forEach((element) => {
        gsap.from(element, {
          xPercent: -20,
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            end: "center center",
            markers: false,
          },
        });
      });
    });

  $(".tablet")
    .imagesLoaded()
    .done(function (instance) {
      //ANIM RIGHT
      gsap.from(".tablet img", {
        xPercent: -30,
        scrollTrigger: {
          trigger: ".tablet",
          start: "top bottom",
          end: "bottom top",
          markers: false,
        },
      });
    });

  $(".col-typ__title")
    .imagesLoaded()
    .done(function (instance) {
      //ANIM COLORS
      gsap.from(".col-typ__title img", {
        yPercent: -102,
        scrollTrigger: {
          trigger: ".col-typ__title",
          start: "top 70%",
          end: "bottom 70%",
          markers: false,
        },
      });
    });

  $(".animBox")
    .imagesLoaded()
    .done(function (instance) {
      var anim = gsap.utils.toArray(".animBox");
      anim.forEach((element) => {
        var el = $(element).find(".anim");
        gsap.from(el, {
          yPercent: -20,
          opacity: 0,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 50%",
            markers: false,
          },
        });
      });
    });
});
