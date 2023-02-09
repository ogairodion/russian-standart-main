import { Swiper, Navigation, Autoplay } from 'swiper';

Swiper.use([Navigation, Autoplay]);

const newsAllSlider = new Swiper(".news-all__slider", {
    slidesPerView: 1,
    spaceBetween: 36,
    loop: true,
    observer: true,
    observeParents: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.news-all__slider-container .slider-arrow-next',
        prevEl: '.news-all__slider-container .slider-arrow-prev',
    },
    breakpoints: {
      600: {
        slidesPerView: 3,
      },
    },
});