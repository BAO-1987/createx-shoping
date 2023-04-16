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
  autoHeight: true,
  // effect: "fade",
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

const offersSlider = new Swiper(".offers-slider", {
  slidesPerView: 1,
  mousewheelControl: true,
  keyboardControl: true,
  grabCursor: true,
  // loop: true,

  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },


  navigation: {
    nextEl: ".offers-btn__next",
    prevEl: ".offers-btn__prev",
  },
});

const arrivalSlider = new Swiper(".arrival-slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  mousewheelControl: true,
  keyboardControl: true,
  grabCursor: true,
  // loop: true,

  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },


  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {

    475: {
      slidesPerView: 3,
    },

    992: {
      slidesPerView: 4,
    },

    1600: {
      slidesPerView: 6,
    },
  },
});

const trendingSlider = new Swiper(".trending-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  mousewheelControl: true,
  keyboardControl: true,
  grabCursor: true,
  loop: true,

  navigation: {
    nextEl: ".trending-slider__next",
    prevEl: ".trending-slider__prev",
  },
});

const saleSlider = new Swiper(".sale-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  mousewheelControl: true,
  keyboardControl: true,
  grabCursor: true,
  loop: true,

  navigation: {
    nextEl: ".sale-slider__next",
    prevEl: ".sale-slider__prev",
  },
});

