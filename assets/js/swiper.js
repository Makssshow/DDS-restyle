if ($(window).width() <= 700) {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 2,
    slidesPerColumn: 3,
    spaceBetween: 30,
    slidesPerGroup: 2,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
} else {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 6,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
