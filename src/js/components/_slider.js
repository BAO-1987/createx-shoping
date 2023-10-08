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
    delay: 6500,
    disableOnInteraction: false,
  },
};

const commonSwiperBreakpoints = {
  breakpoints: {

    420: {
      slidesPerView: 1,
    },

    450: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
}

const heroSliderSpeed = 2000;

const bodyStyles = window.getComputedStyle(document.body);
const fooBar = bodyStyles.getPropertyValue('--hero-slider-speed');

document.body.style.setProperty('--hero-slider-speed', heroSliderSpeed + 'ms');

const heroSlider = new Swiper(".hero-slider", {
  ...commonSwiperOptions,

  speed: heroSliderSpeed,
  parallax: true,
  autoplay: {
    delay: 1500,
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
  loop: true,
  slidesPerView: 1,

  navigation: {
    nextEl: ".offers-btn__next",
    prevEl: ".offers-btn__prev",
  },
});

const arrivalSlider = new Swiper(".arrival-slider", {
  ...commonSwiperOptions,
  spaceBetween: 20,


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
      // spaceBetween: 10,
    },

    1200: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

const trendingSlider = new Swiper(".trending-slider", {
  ...commonSwiperOptions,
  ...commonSwiperBreakpoints,


  navigation: {
    nextEl: ".trending-slider__next",
    prevEl: ".trending-slider__prev",
  },
});

const saleSlider = new Swiper(".sale-slider", {
  ...commonSwiperOptions,
  ...commonSwiperBreakpoints,

  navigation: {
    nextEl: ".sale-slider__next",
    prevEl: ".sale-slider__prev",
  },
});

const singleImages = document.querySelector('.single-slider');

if (singleImages) {
  const singleSlider = new Swiper('.single-slider__nav', {
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


const looklSlider = new Swiper(".look-slider", {
  ...commonSwiperOptions,
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".look-slider__next",
    prevEl: ".look-slider__prev",
  },

  breakpoints: {

    650: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    775: {
      slidesPerView: 2,
      spaceBetween: 30,
    },


  },
});

const interestSlider = new Swiper(".interest-slider", {
  ...commonSwiperOptions,

  breakpoints: {

    425: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    600: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1200: {
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

    425: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    600: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 4,
    }
  },

  navigation: {
    nextEl: ".recently-slider__next",
    prevEl: ".recently-slider__prev",
  },
});


window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;
    const sliderElement = document.querySelector(swiperClass);


    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      // Check if the slider element with the specified class exists on the page.
      if (document.querySelector(className)) {
        swiper = new Swiper(className, settings);

        if (callback) {
          callback(swiper);
        }
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  };


  resizableSwiper(
    '(max-width: 768px)',
    '.banners', {
      loop: true,
      grabCursor: true,
       parallax: true,
      spaceBetween: 0,
      slidesPerView: 1,
      pagination: {
        el: '.banners__pagination',
        clickable: true,
      },
    },
  );
});
