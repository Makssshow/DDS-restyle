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
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});





var Sdelay = 3000,
  SperView = 6,
  SperGroup = 6,
  SperColumn = 1
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



var h = 5;
if (jQuery(window).width() <= 800) {
  for (let i = 4; i >= 0; i--) {
    var img = jQuery(".img");
    jQuery(img[i]).css("display", "block");
  }
}
jQuery(".button_mob").click(function () {
    var portfol = jQuery(".img");
    for (let a = h + 4; a >= h; a--) {
        jQuery(portfol[a]).css("display", "block");
    }
    h = h + 4;
    if (jQuery('.img:visible').length >= portfol.length) {
        jQuery(".button_mob").css("display", "none");
    }
});