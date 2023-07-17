import Swiper, {
  Navigation,
  Pagination,
} from 'swiper/bundle';

const commonSwiperOptions = {
  slidesPerView: 1,
  mousewheelControl: true,
  keyboardControl: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
};

const heroSliderSpeed = 1500;

const bodyStyles = window.getComputedStyle(document.body);
const fooBar = bodyStyles.getPropertyValue('--hero-slider-speed');

document.body.style.setProperty('--hero-slider-speed', heroSliderSpeed + 'ms');

const heroSlider = new Swiper(".hero-slider", {
  ...commonSwiperOptions,

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
  ...commonSwiperOptions,

  // autoplay: {
  //   delay: 4500,
  //   disableOnInteraction: false,
  // },


  navigation: {
    nextEl: ".offers-btn__next",
    prevEl: ".offers-btn__prev",
  },
});

const arrivalSlider = new Swiper(".arrival-slider", {
  ...commonSwiperOptions,


  pagination: {
    el: ".arrival-slider__pagination",
    clickable: true,
  },

  breakpoints: {

    420: {
      slidesPerView: 1,
    },

    425: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    575: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 4,
    },

    992: {
      slidesPerView: 5,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

const trendingSlider = new Swiper(".trending-slider", {
  ...commonSwiperOptions,

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
  ...commonSwiperOptions,

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

const singleImages = document.querySelector('.single-slider');

if (singleImages) {
  const singleSlider = new Swiper('.single-slider__nav', {
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      // 320: {
      //   slidesPerView: 3,
      //    spaceBetween: 10,
      // },
      // 768: {
      //   slidesPerView: 2,
      // }
    }
  });
  const singleSlidesNav = new Swiper(singleImages, {
    slidesPerView: 1,
    navigation: {
      nextEl: ".single-slider__next",
      prevEl: ".single-slider__prev",
    },
    thumbs: {
      swiper: singleSlider,
    },
  });
}

// const articleSlider = new Swiper(".article-slider", {
//   slidesPerView: 1,
//   mousewheelControl: true,
//   keyboardControl: true,
//   grabCursor: true,
//   loop: true,
// });


const looklSlider = new Swiper(".look-slider", {
  ...commonSwiperOptions,
  slidesPerView: 2,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".look-slider__next",
    prevEl: ".look-slider__prev",
  },

  // breakpoints: {

  //   475: {
  //     slidesPerView: 2,
  //   },

  //   768: {
  //     slidesPerView: 3,
  //   },

  //   1200: {
  //     slidesPerView: 6,
  //   },
  // },
});

const interestSlider = new Swiper(".interest-slider", {
  ...commonSwiperOptions,

  breakpoints: {

    475: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
    },

    1400: {
      slidesPerView: 4,
    }
  },

  navigation: {
    nextEl: ".interest-slider__next",
    prevEl: ".interest-slider__prev",
  },
});


const recentlySlider = new Swiper(".recently-slider", {
  ...commonSwiperOptions,

  breakpoints: {

    475: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
    },

    1400: {
      slidesPerView: 4,
    }
  },

  navigation: {
    nextEl: ".recently-slider__next",
    prevEl: ".recently-slider__prev",
  },
});
