import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import axios from 'axios';
import iziToast from 'izitoast';

const listEl = document.querySelector('.js-reviews-box-list');

axios.defaults.baseURL ='https://portfolio-js.b.goit.study/api';

async function getReviewsData() {
  try {
    const response = await axios.get(`/reviews`);
    return response.data;
  } catch (error) {
    iziToast.error({
      message: 'Error fetching reviews. Please try again later.',
      position: 'topRight',
    });
    return;
  }
}

async function renderReviews() {
  try {
    const reviewsData = await getReviewsData();
    if (!reviewsData || reviewsData.length === 0) {
      listEl.innerHTML = '<li class="reviews-list-card">Not Found</li>';
      return;
    }
    const reviewsList = reviewsData
      .map(
        review => `
          <li class="swiper-slide reviews-list-card">
            <img src="${review.avatar_url}" 
                 loading="lazy" 
                 alt="${review.author}" 
                 class="reviews-card-img" 
                 width="48" height="48">
            <div class="reviews-card-desc">
              <h3 class="reviews-card-subtitle">${review.author}</h3>
              <div class="reviews-card-text">${review.review}</div>
            </div>
          </li>
        `
      )
      .join('');
    listEl.innerHTML = reviewsList;
  } catch (error) {
    iziToast.error({
      message: 'Error rendering reviews. Please try again later.',
      position: 'topRight',
    });
  }
}

async function initSwiper() {
    await renderReviews();

    new Swiper('.reviews-swiper', {
        modules: [Navigation, Keyboard],
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 16,
        navigation: {
            nextEl: '.js-reviews-btn-next',
            prevEl: '.js-reviews-btn-previous',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1440: {
                slidesPerView: 4,
            },
        },
    });
}
initSwiper();

