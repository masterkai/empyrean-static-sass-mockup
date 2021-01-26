import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container',{
  direction: 'horizontal',
  allowSlideNext: true,
  allowSlidePrev: true,
  autoplay: {
    delay: 5000,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

export default swiper