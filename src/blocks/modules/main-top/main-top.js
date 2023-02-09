import { Swiper, Lazy, Pagination, EffectFade, Autoplay } from 'swiper';

Swiper.use([Lazy, Pagination, EffectFade, Autoplay]);

const mainTopSlider = new Swiper(".main-top__slider", {
    slidesPerView: 1,
    lazy: true,
    loop: true,
    speed: 2500,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".main-top .swiper-pagination",
      clickable: true,
    },
});