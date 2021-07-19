jQuery(document).ready(function () {
  div();
  mobile();
});

// if (jQuery(window).width() <= 800) {
//   var a = jQuery(".img img");
//   for (var t = 0; t < a.length; t++) {
//     var q = jQuery(a[t]).attr("src");
//     const img = new Image();
//     img.src = q;
//     console.log(q)
//   }
// }


function div() {
  if (jQuery(".img_3, .img_4")) {
    for (var i = 0; i <= jQuery(".img_3").length - 1; i++) {
      jQuery(".img_3:eq(" + i + "), .img_4:eq(" + i + ")").wrapAll(
        "<div></div>"
      );
    }
  }
  if (jQuery(".img_12")) {
    for (var i = 0; i <= jQuery(".img_12").length - 1; i++) {
      jQuery(
        ".img_12:eq(" + i + "), .img_13:eq(" + i + "), .img_14:eq(" + i + ")"
      ).wrapAll("<div class='div_2'></div>");
    }
  }
}

function mobile() {
  var h = 5;
  if (jQuery(window).width() <= 800) {
    for (let i = 4; i >= 0; i--) {
      var img = jQuery(".img");
      jQuery(img[i]).css("display", "block");
    }
    if (jQuery(".img").length <= 4) {
      jQuery(".button_mob").fadeOut(500);
    } else {
      jQuery(".button_mob").fadeIn(500);
    }
  }
  jQuery(".button_mob").click(function () {
    var portfol = jQuery(".img");
    for (let a = h + 4; a >= h; a--) {
      jQuery(portfol[a]).css("display", "block");
    }
    h = h + 4;
    if (jQuery(".img:visible").length >= portfol.length) {
      jQuery(".button_mob").css("display", "none");
    }
  });
}

jQuery(function () {
  var mainContent = jQuery(".grid"),
    cat_links = jQuery(".types__item");

  cat_links.on("click", function (e) {
    e.preventDefault();
    var el = jQuery(this).find("a");
    var value = el.attr("href");
    mainContent.animate({
      opacity: "0.5",
    });
    mainContent.load(value + " .img", function () {
      mainContent.animate({
        opacity: "1",
      });
      div();
      mobile();
    });
    cat_links.removeClass("active");
    jQuery(this).addClass("active");
  });
});

var delay = 3000,
  perView = "auto",
  perColumn = 1;
if (jQuery(window).width() <= 800) {
  perView = 1;
}
const swiper = new Swiper(".sl", {
  slidesPerView: perView,
  spaceBetween: 18,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var Sdelay = 3000,
  SperView = 6,
  SperGroup = 6,
  SperColumn = 1;
Slo = true;
if (jQuery(window).width() <= 800) {
  SperView = 2;
  SperGroup = 2;
  SperColumn = 3;
  Slo = false;
}
const swiperr = new Swiper(".sw", {
  slidesPerView: SperView,
  slidesPerGroup: SperGroup,
  slidesPerColumn: SperColumn,
  spaceBetween: 30,
  loop: Slo,
  autoplay: {
    delay: Sdelay,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
