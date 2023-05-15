const footer = $('.footer');

window.addEventListener('scroll', function () {
    isScrollY()
});
window.addEventListener('resize', function () {
    isScrollY()
})

function isScrollY() {
    const pageHeight = document.documentElement.scrollHeight;
    console.log(pageHeight);
    if (pageHeight <= 850) {
        footer.css('position', `static`);
        footer.css('margin-top', `28px`);

    } else {
        footer.css('position', `fixed`);
        footer.css('bottom', `0`);
        footer.css('margin-top', `28px`);
    }
}
isScrollY()