import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const container = document.querySelector('.accordion');

 new Accordion(container, {
  openOnInit: [],
  showMultiple: false,
  duration: 500,
  elementClass: 'accordion-item',
  panelClass: 'accordion-content',
  triggerClass: 'btn-svg-opn',
});

const faqButtons = document.querySelectorAll('.btn-svg-opn');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        faqButtons.forEach(btn => {
            if (btn !== button) {
                btn.classList.remove('rotate');
            }
        });

        button.classList.toggle('rotate');
    });
});

