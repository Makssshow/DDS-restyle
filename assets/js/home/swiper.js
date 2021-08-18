var delay = 3000,
  perView = 6,
  perGroup = 6,
  perColumn = 2;
if (jQuery(window).width() <= 650) {
  perView = 2;
  perGroup = 2;
  perColumn = 3;
}
const swiper = new Swiper(".swiper-container", {
  slidesPerView: perView,
  slidesPerGroup: perGroup,
  slidesPerColumn: perColumn,
  spaceBetween: 44,
  autoplay: {
    delay: delay,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
