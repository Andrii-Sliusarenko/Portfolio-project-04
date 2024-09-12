import Swiper from 'swiper';
import { Scrollbar, EffectCards } from 'swiper/modules';
new Swiper('.projects-swiper-container', {
  modules: [Scrollbar, EffectCards],
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,
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
