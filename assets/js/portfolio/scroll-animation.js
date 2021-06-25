jQuery(document).ready(function ($) {
  gsap.registerPlugin(ScrollTrigger);

  $(".main__img")
    .imagesLoaded()
    .done(function (instance) {
      $(".main__img").addClass("main__shadow");
    });

  ScrollTrigger.defaults({
    scrub: 0.05,
  });

  if ($(window).width() > 1050) {
    ///////////////////////////////////HERO

    $(".hero__title")
      .imagesLoaded()
      .done(function (instance) {
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
  } else {
    $(".main_wrap")
      .imagesLoaded()
      .done(function (instance) {
        var hero_anim_mob = gsap.timeline({
          scrollTrigger: {
            trigger: "html",
            start: "top top",
            endTrigger: ".hero__title",
            end: "-=" + ($(".main__title").height() + 130) + " top",
            pin: ".main__title",
            pinSpacing: false,
            markers: false,
          },
        });
        hero_anim_mob
          .to(".main__img img", {
            yPercent: -100,
          })
          .to(
            ".main__type span",
            {
              yPercent: -110,
              duration: 0.2,
            },
            0
          );
      });

    $(".main_wrap, .collage-1, .col-typ")
      .imagesLoaded()
      .done(function (instance) {
        var colors_anim_mob = gsap.timeline({
          scrollTrigger: {
            trigger: ".colors",
            start: "top 80%",
            end: "top 30%",
            markers: false,
          },
        });
        colors_anim_mob
          .from(".colors div:nth-child(1)", {
            xPercent: -110,
          })
          .from(
            ".colors div:nth-child(2)",
            {
              y: -81,
            },
            0
          )
          .from(
            ".colors div:nth-child(3)",
            {
              x: 120,
            },
            0.3
          );

        var colors_names_anim_mob = gsap.timeline({
          scrollTrigger: {
            trigger: ".typo",
            start: "top 70%",
            end: "top 50%",
            markers: false,
          },
        });
        colors_names_anim_mob
          .from(".typo__margin:nth-child(1) span", {
            yPercent: -110,
          })
          .from(
            ".typo__margin:nth-child(2) span",
            {
              xPercent: 110,
            },
            0
          );
      });

    $(".collage-2")
      .imagesLoaded()
      .done(function (instance) {
        ScrollTrigger.create({
          trigger: ".collage-2",
          start: "bottom bottom",
          end: "bottom top",
          markers: true,
          pin: true,
          pinSpacing: false,
        });
      });
  }

  $(".pin")
    .imagesLoaded()
    .done(function (instance) {
      //PIN GREEN BORDER
      ScrollTrigger.create({
        trigger: ".pin__background",
        start: "center center",
        endTrigger: ".pin img:last-child",
        end: "center center",
        pin: true,
        pinSpacing: false,
        markers: false,
      });
    });

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
            start: "top 80%",
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

  // $(".animBox")
  //   .imagesLoaded()
  //   .done(function (instance) {
  //     var anim = gsap.utils.toArray(".animBox");
  //     anim.forEach((element) => {
  //       var el = $(element).find(".anim");
  //       gsap.from(el, {
  //         yPercent: -20,
  //         opacity: 0,
  //         scrollTrigger: {
  //           trigger: element,
  //           start: "top 90%",
  //           end: "top 40%",
  //           markers: false,
  //         },
  //       });
  //     });
  //   });
});
