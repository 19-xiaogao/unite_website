const slides = $('.slides');
const slideWidth = $('.slider').width();
let slideIndex = 0;

function showSlide() {
  slides.css('transform', `translateX(-${slideIndex * slideWidth}px)`);
  $('.dot').removeClass('active').eq(slideIndex).addClass('active');
  const currentSlide = slides.children().eq(slideIndex);
  const desc = currentSlide.find('p').text();
  $('.current-info p').text(desc);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.children().length - 1;
  }
  showSlide();
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.children().length) {
    slideIndex = 0;
  }
  showSlide();
}

$('.prev').on('click', prevSlide);
$('.next').on('click', nextSlide);

for (let i = 0; i < slides.children().length; i++) {
  $('<div class="dot"></div>').appendTo('.dots');
}
$('.dot').on('click', function () {
  slideIndex = $(this).index();
  showSlide();
});

showSlide();
setInterval(nextSlide, 5000); // 自动切换