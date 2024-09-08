import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const coversSection = document.querySelector('#covers');
const coversBackground = document.querySelector('.covers-background');
const coversWrapper = document.querySelector('.covers-wrapper');



function animateCovers(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      coversBackground.classList.add('animated');
      coversWrapper.classList.add('animated');
    } else {
      coversBackground.classList.remove('animated');
      coversWrapper.classList.remove('animated');
    }
  });
}

const observer = new IntersectionObserver(animateCovers, {
  root: null,
  threshold: 0,
});

observer.observe(coversSection);

function showImage(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const image = event.target.currentSrc;
  const instance = basicLightbox.create(
    `<img
      src="${image}"
      alt="${event.target.alt}"
      class="covers-full-image"
    />`,
    {
      onShow: instance => {
        window.addEventListener('keydown', closeOnEscape);
      },
      onClose: instance => {
        window.removeEventListener('keydown', closeOnEscape);
      },
    }
  );

  instance.show();

  function closeOnEscape(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}

coversWrapper.addEventListener('click', showImage);