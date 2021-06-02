var delay = 3000,
  perView = 2,
  perGroup = 2,
  perColumn = 3;

if ($(window).width() > 700) {
  perView = 6;
  perGroup = 6;
  perColumn = 1;
}
const swiper = new Swiper(".swiper-container", {
  slidesPerView: perView,
  slidesPerGroup: perGroup,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: delay,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
