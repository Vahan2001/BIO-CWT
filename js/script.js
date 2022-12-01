var offset = 0;
const sliderLine = document.querySelector('.slider-line');
document.querySelector('.slider-prev').addEventListener('click', function() {
    offset = offset + 1130;
    if (offset > 2260) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});
document.querySelector('.slider-next').addEventListener('click', function() {
    offset = offset - 1130;
    if (offset < 0) {
        offset = 2260;
    }
    sliderLine.style.left = -offset + 'px';
});

