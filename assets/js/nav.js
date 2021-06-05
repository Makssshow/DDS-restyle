var navigation = {
  // Variables
  $nav: document.querySelector("header"),
  $navTrigger: document.querySelector(".header__button"),
  $navContent: document.querySelector(".nav__list"),
  $navList: document.querySelector(".nav"),
  transitionEnd:
    "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",

  init: function init() {
    var self = this;

    // Handle the transitions
    self.$navTrigger.addEventListener("click", function () {
      if (!self.$navTrigger.classList.contains("is-active")) {
        // .nav--trigger active
        self.$navTrigger.classList.add("is-active");

        // .nav active
        if (!self.$nav.classList.contains("is-active")) {
          self.$nav.classList.add("is-active");
          self.$navList.addEventListener("transitionend", function (e) {
            if (
              e.propertyName == "width" &&
              self.$navTrigger.classList.contains("is-active")
            ) {
              // .nav__content active
              self.$navContent.classList.add("is-active");
            }
          });
        } else {
          self.$navContent.classList.add("is-active");
        }

        // no-csstransitions fallback
        if (document.documentElement.classList.contains("no-csstransitions")) {
          self.$navContent.classList.add("is-active");
        }
      } else {
        // .nav--trigger inactive
        self.$navTrigger.classList.remove("is-active");

        // .nav__content inactive
        if (self.$navContent.classList.contains("is-active")) {
          self.$navContent.classList.remove("is-active");
          self.$navContent.addEventListener("transitionend", function (e) {
            if (
              e.propertyName == "transform" &&
              !self.$navTrigger.classList.contains("is-active")
            ) {
              // .nav inactive
              self.$nav.classList.remove("is-active");
            }
          });
        } else {
          self.$nav.classList.remove("is-active");
        }

        // no-csstransitions fallback
        if (document.documentElement.classList.contains("no-csstransitions")) {
          self.$nav.classList.remove("is-active");
        }
      }
    });
  },
};

navigation.init();



var hoverMouse = function ($el) {
  $el.each(function () {
    var main = $(this);
    var $self = $(this).children(".nav__hover");
    var hover = false;

    var attachEventsListener = function () {
      $(window).on("mousemove", function (e) {
        // cursor
        var cursor = {
          x: e.clientX,
          y: e.clientY,
        };

        // size
        var width = main.outerWidth();
        var height = main.outerHeight();

        // position
        var offset = main.offset();
        var elPos = {
          x: offset.left + width / 2,
          y: offset.top + height / 2,
        };

        // comparaison
        var x = cursor.x - elPos.x;
        var y = cursor.y - elPos.y;

        // mutex hover
        var mutHover = false;

        // anim
        if (x <= width * 0.5 && x >= width * -0.5) {
          if (y <= height * 0.5 && y >= height * -0.5) {
            mutHover = true;

            if (!hover) {
              hover = true;
            }
            onHover(x, y);
          }
        }

        // reset
        if (!mutHover && hover) {
          onLeave();
          hover = false;
        }
      });
    };

    var onHover = function (x, y) {
      TweenMax.to($self, 0.4, {
        x: x * 0.3,
        y: y * 0.3,
        //scale: .9,
        //rotation: x * 0.05,
        ease: Power2.easeOut,
      });
    };
    var onLeave = function () {
      TweenMax.to($self, 0.7, {
        x: 0,
        y: 0,
        // scale: 1,
        // rotation: 0,
        ease: Elastic.easeOut.config(1.2, 0.4),
      });
    };

    attachEventsListener();
  });
};

hoverMouse($(".anim"));
