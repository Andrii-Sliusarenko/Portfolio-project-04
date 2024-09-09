document.getElementById('ToTop').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('OnBottom').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('work-together').scrollIntoView({
        behavior: 'smooth'
    });
});