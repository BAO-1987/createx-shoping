// import GraphTabs from 'graph-tabs';

// // if (document.querySelector('.single')) {
// //   const tabs = new GraphTabs('.single')
// // }


// const tabs = new GraphTabs('.single');
// const tabsSize = new GraphTabs('.size');


// function _typeof(e) {
//   return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
//       return typeof e
//     } :
//     function (e) {
//       return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
//     }
//   )(e)
// }

// function ownKeys(t, e) {
//   var r, n = Object.keys(t);
//   return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t),
//       e && (r = r.filter(function (e) {
//         return Object.getOwnPropertyDescriptor(t, e).enumerable
//       })),
//       n.push.apply(n, r)),
//     n
// }

// function _objectSpread(t) {
//   for (var e = 1; e < arguments.length; e++) {
//     var r = null != arguments[e] ? arguments[e] : {};
//     e % 2 ? ownKeys(Object(r), !0).forEach(function (e) {
//       _defineProperty(t, e, r[e])
//     }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function (e) {
//       Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
//     })
//   }
//   return t
// }

// function _defineProperty(e, t, r) {
//   return t in e ? Object.defineProperty(e, t, {
//       value: r,
//       enumerable: !0,
//       configurable: !0,
//       writable: !0
//     }) : e[t] = r,
//     e
// }
// /**
//  * Createx | Multipurpose Bootstrap Template
//  * Copyright 2022 Createx Studio
//  * Theme core scripts
//  *
//  * @author Createx Studio
//  * @version 1.1.0
//  */
// ! function () {
//   "use strict";
//   var e, t, r, n, a, o, l, s;
//   null != (r = document.querySelector(".navbar-sticky")) && (e = r.classList,
//       t = r.offsetHeight,
//       e.contains("navbar-floating") && e.contains("navbar-dark") ? window.addEventListener("scroll", function (e) {
//         500 < e.currentTarget.pageYOffset ? (r.classList.remove("navbar-dark"),
//           r.classList.add("navbar-light"),
//           r.classList.add("navbar-stuck")) : (r.classList.remove("navbar-stuck"),
//           r.classList.remove("navbar-light"),
//           r.classList.add("navbar-dark"))
//       }) : e.contains("navbar-floating") && e.contains("navbar-light") ? window.addEventListener("scroll", function (e) {
//         500 < e.currentTarget.pageYOffset ? r.classList.add("navbar-stuck") : r.classList.remove("navbar-stuck")
//       }) : window.addEventListener("scroll", function (e) {
//         500 < e.currentTarget.pageYOffset ? (document.body.style.paddingTop = t + "px",
//           r.classList.add("navbar-stuck")) : (document.body.style.paddingTop = "",
//           r.classList.remove("navbar-stuck"))
//       })),
//     function () {
//       for (var r = document.querySelectorAll(".password-toggle"), e = 0; e < r.length; e++)
//         ! function (e) {
//           var t = r[e].querySelector(".form-control");
//           r[e].querySelector(".password-toggle-btn").addEventListener("click", function (e) {
//             "checkbox" === e.target.type && (e.target.checked ? t.type = "text" : t.type = "password")
//           }, !1)
//         }(e)
//     }(),
//     function () {
//       for (var t = document.querySelectorAll(".file-drop-area"), e = 0; e < t.length; e++)
//         ! function (e) {
//           var n = t[e].querySelector(".file-drop-input"),
//             a = t[e].querySelector(".file-drop-message"),
//             o = t[e].querySelector(".file-drop-icon");
//           t[e].querySelector(".file-drop-btn").addEventListener("click", function () {
//               n.click()
//             }),
//             n.addEventListener("change", function () {
//               var e;
//               n.files && n.files[0] && ((e = new FileReader).onload = function (e) {
//                   var t, e = e.target.result,
//                     r = n.files[0].name;
//                   a.innerHTML = r,
//                     e.startsWith("data:image") ? ((t = new Image).src = e,
//                       t.onload = function () {
//                         o.className = "file-drop-preview img-thumbnail rounded",
//                           o.innerHTML = '<img src="' + t.src + '" alt="' + r + '">'
//                       }
//                     ) : e.startsWith("data:video") ? (o.innerHTML = "",
//                       o.className = "",
//                       o.className = "file-drop-icon ai-film") : (o.innerHTML = "",
//                       o.className = "",
//                       o.className = "file-drop-icon ai-file-text")
//                 },
//                 e.readAsDataURL(n.files[0]))
//             })
//         }(e)
//     }(),
//     window.addEventListener("load", function () {
//       var e = document.getElementsByClassName("needs-validation");
//       Array.prototype.filter.call(e, function (t) {
//         t.addEventListener("submit", function (e) {
//           !1 === t.checkValidity() && (e.preventDefault(),
//               e.stopPropagation()),
//             t.classList.add("was-validated")
//         }, !1)
//       })
//     }, !1),
//     function () {
//       var e = document.querySelectorAll("[data-format]");
//       if (0 !== e.length)
//         for (var t = 0; t < e.length; t++) {
//           var r = e[t].dataset.format,
//             n = e[t].dataset.blocks,
//             a = e[t].dataset.delimiter,
//             n = void 0 !== n ? n.split(" ").map(Number) : "",
//             a = void 0 !== a ? a : " ";
//           switch (r) {
//             case "card":
//               new Cleave(e[t], {
//                 creditCard: !0
//               });
//               break;
//             case "cvc":
//               new Cleave(e[t], {
//                 numeral: !0,
//                 numeralIntegerScale: 3
//               });
//               break;
//             case "date":
//               new Cleave(e[t], {
//                 date: !0,
//                 datePattern: ["m", "y"]
//               });
//               break;
//             case "date-long":
//               new Cleave(e[t], {
//                 date: !0,
//                 delimiter: "-",
//                 datePattern: ["Y", "m", "d"]
//               });
//               break;
//             case "time":
//               new Cleave(e[t], {
//                 time: !0,
//                 datePattern: ["h", "m"]
//               });
//               break;
//             case "custom":
//               new Cleave(e[t], {
//                 delimiter: a,
//                 blocks: n
//               });
//               break;
//             default:
//               console.error("Sorry, your format " + r + " is not available. You can add it to the theme object method - inputFormatter in src/js/theme.js or choose one from the list of available formats: card, cvc, date, date-long, time or custom.")
//           }
//         }
//     }(),
//     new SmoothScroll("[data-scroll]", {
//       speed: 800,
//       speedAsDuration: !0,
//       offset: 40,
//       header: "[data-scroll-header]",
//       updateURL: !1
//     }),
//     null != (a = document.querySelector(".btn-scroll-top")) && (n = parseInt(600, 10),
//       window.addEventListener("scroll", function (e) {
//         e.currentTarget.pageYOffset > n ? a.classList.add("show") : a.classList.remove("show")
//       })),
//     [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (e) {
//       return new bootstrap.Tooltip(e, {
//         trigger: "hover"
//       })
//     }),
//     [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function (e) {
//       return new bootstrap.Popover(e)
//     }),
//     [].slice.call(document.querySelectorAll(".toast")).map(function (e) {
//       return new bootstrap.Toast(e)
//     }),
//     function () {
//       var l = document.querySelectorAll(".subscription-form");
//       if (null !== l) {
//         for (var e = 0; e < l.length; e++)
//           ! function (e) {
//             var t = l[e].querySelector('button[type="submit"]'),
//               r = t.innerHTML,
//               n = l[e].querySelector(".form-control"),
//               a = l[e].querySelector(".subscription-form-antispam"),
//               o = l[e].querySelector(".subscription-status");
//             l[e].addEventListener("submit", function (e) {
//               e && e.preventDefault(),
//                 "" === a.value && s(this, t, n, r, o)
//             })
//           }(e);
//         var s = function (e, t, r, n, a) {
//           t.innerHTML = "Sending...";
//           var e = e.action.replace("/post?", "/post-json?"),
//             o = "&" + r.name + "=" + encodeURIComponent(r.value),
//             l = document.createElement("script"),
//             s = (l.src = e + "&c=callback" + o,
//               document.body.appendChild(l),
//               "callback");
//           window[s] = function (e) {
//             delete window[s],
//               document.body.removeChild(l),
//               t.innerHTML = n,
//               "success" == e.result ? (r.classList.remove("is-invalid"),
//                 r.classList.add("is-valid"),
//                 a.classList.remove("status-error"),
//                 a.classList.add("status-success"),
//                 a.innerHTML = e.msg,
//                 setTimeout(function () {
//                   r.classList.remove("is-valid"),
//                     a.innerHTML = "",
//                     a.classList.remove("status-success")
//                 }, 6e3)) : (r.classList.remove("is-valid"),
//                 r.classList.add("is-invalid"),
//                 a.classList.remove("status-success"),
//                 a.classList.add("status-error"),
//                 a.innerHTML = e.msg.substring(4),
//                 setTimeout(function () {
//                   r.classList.remove("is-invalid"),
//                     a.innerHTML = "",
//                     a.classList.remove("status-error")
//                 }, 6e3))
//           }
//         }
//       }
//     }(),
//     function () {
//       var e = document.querySelectorAll("[data-view]");
//       if (0 < e.length)
//         for (var t = 0; t < e.length; t++)
//           e[t].addEventListener("click", function (e) {
//             var t = this.dataset.view;
//             r(t),
//               "#" === this.getAttribute("href") && e.preventDefault()
//           });
//       var r = function (e) {
//         for (var e = document.querySelector(e), t = e.parentNode.querySelectorAll(".view"), r = 0; r < t.length; r++)
//           t[r].classList.remove("show");
//         e.classList.add("show")
//       }
//     }(),
//     function () {
//       for (var e = document.querySelectorAll(".tns-carousel-wrapper .tns-carousel-inner"), t = function (e, t) {
//           var r, n = {
//               container: t,
//               controlsText: ['<i class="ci-arrow-left"></i>', '<i class="ci-arrow-right"></i>'],
//               navPosition: "top",
//               controlsPosition: "top",
//               mouseDrag: !0,
//               speed: 600,
//               autoplayHoverPause: !0,
//               autoplayButtonOutput: !1
//             },
//             t = (null != t.dataset.carouselOptions && (r = JSON.parse(t.dataset.carouselOptions)),
//               _objectSpread(_objectSpread({}, n), r));
//           tns(t)
//         }, r = void 0, n = 0; n < e.length; n++)
//         t.call(r, n, e[n])
//     }(),
//     function () {
//       var d = document.querySelectorAll(".countdown");
//       if (null != d)
//         for (var e = function (e) {
//             var t, r, n, a, o = d[e].dataset.countdown,
//               l = d[e].querySelector(".countdown-days .countdown-value"),
//               s = d[e].querySelector(".countdown-hours .countdown-value"),
//               i = d[e].querySelector(".countdown-minutes .countdown-value"),
//               c = d[e].querySelector(".countdown-seconds .countdown-value"),
//               o = new Date(o).getTime();
//             if (isNaN(o))
//               return {
//                 v: void 0
//               };
//             setInterval(function () {
//               var e = (new Date).getTime(),
//                 e = parseInt((o - e) / 1e3);
//               0 <= e && (t = parseInt(e / 86400),
//                 e %= 86400,
//                 r = parseInt(e / 3600),
//                 e %= 3600,
//                 n = parseInt(e / 60),
//                 e %= 60,
//                 a = parseInt(e),
//                 null != l && (l.innerHTML = parseInt(t, 10)),
//                 null != s && (s.innerHTML = r < 10 ? "0" + r : r),
//                 null != i && (i.innerHTML = n < 10 ? "0" + n : n),
//                 null != c && (c.innerHTML = a < 10 ? "0" + a : a))
//             }, 1e3)
//           }, t = 0; t < d.length; t++) {
//           var r = e(t);
//           if ("object" === _typeof(r))
//             return r.v
//         }
//     }(),
//     function () {
//       var e = document.querySelectorAll(".gallery");
//       if (e.length)
//         for (var t = 0; t < e.length; t++) {
//           var r = !!e[t].dataset.thumbnails,
//             n = !!e[t].dataset.video,
//             a = [lgZoom, lgFullscreen],
//             n = n ? [lgVideo] : [],
//             r = r ? [lgThumbnail] : [],
//             a = [].concat(a, n, r);
//           lightGallery(e[t], {
//             selector: ".gallery-item",
//             plugins: a,
//             licenseKey: "D4194FDD-48924833-A54AECA3-D6F8E646",
//             download: !1,
//             autoplayVideoOnSlide: !0,
//             zoomFromOrigin: !1,
//             youtubePlayerParams: {
//               modestbranding: 1,
//               showinfo: 0,
//               rel: 0
//             },
//             vimeoPlayerParams: {
//               byline: 0,
//               portrait: 0,
//               color: "6366f1"
//             }
//           })
//         }
//     }(),
//     function () {
//       for (var e = document.querySelectorAll(".parallax"), t = 0; t < e.length; t++)
//         new Parallax(e[t])
//     }(),
//     function () {
//       var e = document.querySelectorAll("[data-progress-radial]");
//       if (null !== e)
//         for (var t = {
//             strokeWidth: 6,
//             trailWidth: 6,
//             color: "#1e212c",
//             trailColor: "#e5e8ed",
//             easing: "easeInOut",
//             duration: 1e3,
//             svgStyle: null
//           }, r = 0; r < e.length; r++) {
//           var n = void 0,
//             a = (0 < e[r].dataset.progressRadial.length && (n = JSON.parse(e[r].dataset.progressRadial)),
//               _objectSpread(_objectSpread({}, t), n)),
//             a = new ProgressBar.Circle(e[r], a),
//             n = null != n ? n.progress : .75;
//           a.animate(n)
//         }
//     }(),
//     function () {
//       var o = document.querySelectorAll(".pricing-wrap");
//       if (null !== o)
//         for (var e = function (e) {
//             function t() {
//               if (n.checked) {
//                 r.parentNode.classList.add("price-switch-on");
//                 for (var e = 0; e < a.length; e++)
//                   a[e].innerHTML = a[e].dataset.newPrice
//               } else {
//                 r.parentNode.classList.remove("price-switch-on");
//                 for (var t = 0; t < a.length; t++)
//                   a[t].innerHTML = a[t].dataset.currentPrice
//               }
//             }
//             var r = o[e].querySelector(".switch"),
//               n = r.querySelector('input[type="checkbox"]'),
//               a = o[e].querySelectorAll(".price");
//             t(),
//               n.addEventListener("change", function () {
//                 t()
//               })
//           }, t = 0; t < o.length; t++)
//           e(t)
//     }(),
//     function () {
//       var e = document.querySelectorAll("[data-gallery-video]");
//       if (e.length)
//         for (var t = 0; t < e.length; t++)
//           lightGallery(e[t], {
//             selector: "this",
//             plugins: [lgVideo],
//             licenseKey: "D4194FDD-48924833-A54AECA3-D6F8E646",
//             download: !1,
//             youtubePlayerParams: {
//               modestbranding: 1,
//               showinfo: 0,
//               rel: 0
//             },
//             vimeoPlayerParams: {
//               byline: 0,
//               portrait: 0
//             }
//           })
//     }(),
//     function () {
//       for (var t = document.querySelectorAll(".filter"), e = function (e) {
//           var r = t[e].querySelector(".filter-search"),
//             n = t[e].querySelector(".filter-list").querySelectorAll(".filter-item");
//           if (!r)
//             return "continue";
//           r.addEventListener("keyup", function () {
//             for (var e = r.value.toLowerCase(), t = 0; t < n.length; t++)
//               -
//               1 < n[t].querySelector(".filter-item-text").innerHTML.toLowerCase().indexOf(e) ? n[t].classList.remove("d-none") : n[t].classList.add("d-none")
//           })
//         }, r = 0; r < t.length; r++)
//         e(r)
//     }(),
//     function () {
//       for (var a = document.querySelectorAll(".range-slider"), e = 0; e < a.length; e++)
//         ! function (e) {
//           var t = a[e].querySelector(".range-slider-ui"),
//             r = a[e].querySelector(".range-slider-value-min"),
//             n = a[e].querySelector(".range-slider-value-max"),
//             e = {
//               dataStartMin: parseInt(a[e].dataset.startMin, 10),
//               dataStartMax: parseInt(a[e].dataset.startMax, 10),
//               dataMin: parseInt(a[e].dataset.min, 10),
//               dataMax: parseInt(a[e].dataset.max, 10),
//               dataStep: parseInt(a[e].dataset.step, 10)
//             };
//           noUiSlider.create(t, {
//               start: [e.dataStartMin, e.dataStartMax],
//               connect: !0,
//               step: e.dataStep,
//               pips: {
//                 mode: "count",
//                 values: 5
//               },
//               tooltips: !0,
//               range: {
//                 min: e.dataMin,
//                 max: e.dataMax
//               },
//               format: {
//                 to: function (e) {
//                   return "$" + parseInt(e, 10)
//                 },
//                 from: function (e) {
//                   return Number(e)
//                 }
//               }
//             }),
//             null !== r && null !== n && (t.noUiSlider.on("update", function (e, t) {
//                 e = (e = e[t]).replace(/\D/g, "");
//                 t ? n.value = Math.round(e) : r.value = Math.round(e)
//               }),
//               r.addEventListener("change", function () {
//                 t.noUiSlider.set([this.value, null])
//               }),
//               n.addEventListener("change", function () {
//                 t.noUiSlider.set([null, this.value])
//               }))
//         }(e)
//     }(),
//     function () {
//       var e = document.querySelectorAll("[data-filter-grid]");
//       if (null !== e)
//         for (var t = 0; t < e.length; t++)
//           mixitup(e[t], {
//             selectors: {
//               target: ".grid-item"
//             },
//             controls: {
//               scope: "local"
//             },
//             classNames: {
//               block: "",
//               elementFilter: "",
//               modifierActive: "active"
//             },
//             animation: {
//               duration: 350
//             }
//           })
//     }(),
//     function () {
//       for (var e = document.querySelectorAll("[data-binded-content]"), t = (document.querySelector(".binded-content"),
//           0); t < e.length; t++)
//         e[t].addEventListener("click", function (e) {
//           e = document.querySelector(e.currentTarget.dataset.bindedContent);
//           (function (e) {
//             for (var t = [], r = e.parentNode.firstChild; r;)
//               1 === r.nodeType && r !== e && t.push(r),
//               r = r.nextSibling;
//             return t
//           })(e).map(function (e) {
//               e.classList.remove("active")
//             }),
//             e.classList.add("active")
//         })
//     }(),
//     o = document.querySelector("[data-filters-show]"),
//     l = document.querySelector("[data-filters-hide]"),
//     null !== (s = document.querySelector("[data-filters-columns]")) && (l.addEventListener("click", function (e) {
//         e = e.target.dataset.filtersHide;
//         l.classList.remove("d-lg-block"),
//           o.classList.remove("d-lg-none"),
//           document.querySelector(e).classList.add("d-lg-none"),
//           s.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"
//       }),
//       o.addEventListener("click", function (e) {
//         e = e.target.dataset.filtersShow;
//         l.classList.add("d-lg-block"),
//           o.classList.add("d-lg-none"),
//           document.querySelector(e).classList.remove("d-lg-none"),
//           s.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3"
//       })),
//     function () {
//       for (var e = document.querySelectorAll("[data-label]"), t = 0; t < e.length; t++)
//         e[t].addEventListener("change", function () {
//           var e = this.dataset.label;
//           try {
//             document.getElementById(e).textContent = this.value
//           } catch (e) {
//             e.message = "Cannot set property 'textContent' of null",
//               console.error("Make sure the [data-label] matches with the id of the target element you want to change text of!")
//           }
//         })
//     }()
// }();
