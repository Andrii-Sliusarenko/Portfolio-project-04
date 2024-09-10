import Swiper from 'swiper';
import { Navigation, Scrollbar, EffectCards } from 'swiper/modules';

new Swiper('.projects-swiper-container', {
  modules: [Navigation, Scrollbar, EffectCards],
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,
  mousewheel: true,
  effect: 'cards',
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.projects-btn-next',
    prevEl: '.projects-btn-prev',
    disabledClass: 'projects-swiper-btn-disabled',
  },
});
