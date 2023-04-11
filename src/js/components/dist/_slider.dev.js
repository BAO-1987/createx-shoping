"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _bundle = _interopRequireWildcard(require("swiper/bundle"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var heroSliderSpeed = 1500;
var bodyStyles = window.getComputedStyle(document.body);
var fooBar = bodyStyles.getPropertyValue('--hero-slider-speed'); //get

document.body.style.setProperty('--hero-slider-speed', heroSliderSpeed + 'ms');
var heroSlider = new _bundle["default"](".hero-slider", {
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
    prevEl: ".hero-slider__prev"
  },
  pagination: {
    el: '.hero__pagination',
    clickable: true,
    type: 'bullets'
  },
  on: {
    init: function init() {
      var paginationBullets = document.querySelectorAll('.hero__pagination .swiper-pagination-bullet');
      paginationBullets.forEach(function (el) {
        el.innerHTML = "<span class=\"hero__bar\"></span>";
      });
    }
  }
});
var offersSlider = new _bundle["default"](".offers-slider", {
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
    prevEl: ".offers-btn__prev"
  }
});
var arrivalSlider = new _bundle["default"](".arrival-slider", {
  slidesPerView: 6,
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
    clickable: true
  }
});
var trendingSlider = new _bundle["default"](".trending-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  mousewheelControl: true,
  keyboardControl: true,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".trending-slider__next",
    prevEl: ".trending-slider__prev"
  }
});
var saleSlider = new _bundle["default"](".sale-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  mousewheelControl: true,
  keyboardControl: true,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".sale-slider__next",
    prevEl: ".sale-slider__prev"
  }
});