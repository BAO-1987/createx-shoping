import Swiper, {
  Navigation,
  Pagination,
} from 'swiper/bundle';

const heroSliderSpeed = 1500;

const bodyStyles = window.getComputedStyle(document.body);
const fooBar = bodyStyles.getPropertyValue('--hero-slider-speed'); //get

document.body.style.setProperty('--hero-slider-speed', heroSliderSpeed + 'ms');

const heroSlider = new Swiper(".hero-slider", {
  slidesPerView: 1,
  mousewheelControl: true,
  keyboardControl: true,
  grabCursor: true,
  // loop: true,

  // speed: heroSliderSpeed,
  // autoplay: {
  //   delay: 1000,
  // },
  // loop: true,
  // centeredSlides: true,

  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },

  navigation: {
    nextEl: ".hero-slider__next",
    prevEl: ".hero-slider__prev",
  },

  pagination: {
    el: '.hero__pagination',
    clickable: true,
    type: 'bullets',
  },
  on: {
    init: function () {
      const paginationBullets = document.querySelectorAll('.hero__pagination .swiper-pagination-bullet');

      paginationBullets.forEach(el => {
        el.innerHTML = `<span class="hero__bar"></span>`;
      });
    },
  },
});

// const reviewsSlider = new Swiper(".reviews-slider", {
//   slidesPerView: 1,
//   mousewheelControl: true,
//   keyboardControl: true,
//   grabCursor: true,
//   // loop: true,
//   // centeredSlides: true,

//   // autoplay: {
//   //   delay: 2000,
//   //   disableOnInteraction: false,
//   // },


//   // a11y: {
//   //   prevSlideMessage: 'Попередній слайд',
//   //   nextSlideMessage: 'Наступний слайд',
//   // },

//   // navigation: {
//   //   nextEl: ".shopping-slider__next",
//   //   prevEl: ".shopping-slider__prev",
//   // },

//   pagination: {
//     el: '.reviews-slider__pagination',
//     type: 'fraction',
//     clickable: true,
//   },
// });
