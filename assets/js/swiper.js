var delay = 3000,
  perView = 6,
  perGroup = 6,
  perColumn = 1
  lo = true;
if ($(window).width() <= 700) {
  perView = 2;
  perGroup = 2;
  perColumn = 3;
  lo = false;
}
const swiper = new Swiper(".swiper-container", {
  slidesPerView: perView,
  slidesPerGroup: perGroup,
  slidesPerColumn: perColumn,
  spaceBetween: 30,
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
