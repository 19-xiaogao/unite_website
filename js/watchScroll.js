const footer = $('.footer');

window.addEventListener('scroll', function () {
    isScrollY()
});

function isScrollY() {
    const sy = window.scrollY;
    if (sy <= 0) {
        footer.css('position', `fixed`);
        footer.css('bottom', `0`);
    } else {
        footer.css('position', `static`);
    }
}
isScrollY()