const footer = $('.footer');

window.addEventListener('scroll', function () {
    isScrollY()
});
window.addEventListener('resize', function () {
    isScrollY()
})
window.addEventListener('load', isScrollY)

function isScrollY() {
    const sw = window.screen.width;
    const href = window.location.href;
    const hrefArr = href.split('/')
    const current = hrefArr[hrefArr.length -1];
    if (sw <= 800) {
        console.log(current);
        if(current == '' || current == 'index.html'){
        $(".main").css('background', `#fff`);
        $(".main").css('padding', `0`);
        $("body").css('background', `#fff`);
        }
    } 
}
isScrollY()