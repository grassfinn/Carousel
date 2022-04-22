const slides = document.getElementsByClassName('carousel-item');

let slidePosition = 0;

const totalSlides = slides.length;

const nextSlide = document.getElementById('next-btn');

moveToNextSlide = () => {
  hideAllSlides();
  // if slide position is equal to the max slide and we try to advance, set it back to the first
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
    // if not increment to the next slide
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add('carousel-item-visible');
};
const prevSlide = document.getElementById('prev-btn');

moveToPrevSlide = () => {
    hideAllSlides()
    // if slide position is equal to the least and we try to decrease, set it back to the max
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
    // if not decrease to the next slide
  } else {
    slidePosition--;
  }

  slides[slidePosition].classList.add('carousel-item-visible');
};

const hideAllSlides = () => {
  for (const slide of slides) {
    slide.classList.remove('carousel-item-visible');
    slide.classList.add('carousel-item-hidden');
  }
};

nextSlide.addEventListener('click', moveToNextSlide);
prevSlide.addEventListener('click', moveToPrevSlide);
