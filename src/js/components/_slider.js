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
  loop: true,

  speed: heroSliderSpeed,
  autoplay: {
    delay: 2500,
  },

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
  loop: true,

  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },


  navigation: {
    nextEl: ".offers-btn__next",
    prevEl: ".offers-btn__prev",
  },
});

const arrivalSlider = new Swiper(".arrival-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  mousewheelControl: true,
  keyboardControl: true,
  grabCursor: true,
  loop: true,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },


  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {

    475: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 6,
    },
  },
});

const trendingSlider = new Swiper(".trending-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheelControl: true,
  keyboardControl: true,
  grabCursor: true,
  loop: true,

  breakpoints: {

    475: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".trending-slider__next",
    prevEl: ".trending-slider__prev",
  },
});

const saleSlider = new Swiper(".sale-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheelControl: true,
  keyboardControl: true,
  grabCursor: true,
  loop: true,

  breakpoints: {

    475: {
      slidesPerView: 2,
    },


    1200: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".sale-slider__next",
    prevEl: ".sale-slider__prev",
  },
});

const workImages = document.querySelector('.single-slider');

if (workImages) {
  const workSlider = new Swiper('.single-slider__nav', {
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      576: {
        slidesPerView: 6
      },
      768: {
        slidesPerView: 10,
      }
    }
  });
  const workSlidesNav = new Swiper(workImages, {
    slidesPerView: 1,
    navigation: {
      nextEl: ".single-slider__next",
      prevEl: ".single-slider__prev",
    },
    thumbs: {
      swiper: workSlider,
    },
  });
}
