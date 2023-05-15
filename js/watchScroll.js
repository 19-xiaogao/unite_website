const footer = $('.footer');

window.addEventListener('scroll', function () {
    isScrollY()
});
window.addEventListener('resize', function () {
    isScrollY()
})
window.addEventListener('load',isScrollY)

function isScrollY() {
    const pageHeight = window.screen.height;
    console.log(pageHeight);
    if (pageHeight == 980) {
        // footer.css('position', `static`);
        // footer.css('margin-top', `28px`);

    } else {
        // footer.css('position', `fixed`);
        // footer.css('bottom', `0`);
        // footer.css('margin-top', `28px`);
    }
}
isScrollY()