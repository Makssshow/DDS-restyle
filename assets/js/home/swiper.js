var delay = 3000,
  perView = 6,
  perGroup = 6,
  perColumn = 2
  lo = true;
if (jQuery(window).width() <= 650) {
  perView = 2;
  perGroup = 2;
  perColumn = 3;
  lo = false;
}
const swiper = new Swiper(".swiper-container", {
  slidesPerView: perView,
  slidesPerGroup: perGroup,
  slidesPerColumn: perColumn,
  spaceBetween: 44,
  loop: lo,
  autoplay: {
    delay: delay,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
