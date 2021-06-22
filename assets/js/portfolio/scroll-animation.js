
  $('.a').imagesLoaded().done( function( instance ) {


  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    scrub: 0.05,
  });

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
    })
  });

    //ANIM RIGHT
      gsap.from(".tablet img", {
        xPercent: -20,
        scrollTrigger: {
          trigger: ".tablet",
          start: "top bottom",
          end: "top top",
          markers: false,
        },
      })
  

  //ANIM COLORS
  gsap.from(".col-typ__title img", {
    yPercent: -102,
    scrollTrigger: {
      trigger: ".col-typ__title",
      start: "top 70%",
      end: "bottom 70%",
      markers: false
    }
  });

  ScrollTrigger.create({
    trigger: ".pin__background",
    start: "center center",
    endTrigger: ".pin img:last-child",
    end: "center center",
    pin: true,
    pinSpacing: false,
    markers: false
  })


});


