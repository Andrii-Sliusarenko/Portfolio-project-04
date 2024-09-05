const faqButton = document.querySelectorAll('.svg-open-faq');
const faqText = document.querySelectorAll('.faq-container-item-text');
const faqQuestion = document.querySelectorAll('.faq-container-item-question');

faqButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        faqText[index].classList.toggle('show');
        button.classList.toggle('rotate');
        faqQuestion[index].classList.toggle('is-coloring');
    });
    button.addEventListener('mouseover', () => {
        faqQuestion[index].classList.add('for-shadow-faq');
    });
    button.addEventListener('mouseout', () => {
        faqQuestion[index].classList.remove('for-shadow-faq');
    })
});

faqQuestion.forEach((question, index) => {
    question.addEventListener('click', () => {
        faqText[index].classList.toggle('show');
        faqButton[index].classList.toggle('rotate');
        question.classList.toggle('is-coloring');
    })
});
