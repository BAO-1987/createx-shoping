document.addEventListener("click", (e) => {
  if (!e.target.matches(".languages__span")) {
    document
      .querySelector(".languages__list")
      .classList.remove("open");
  } else {
    e.target.nextElementSibling.classList.add("open");
  }
});

//  function () {
//    "use strict";
//    var e, t, r, n, a, o, l, s;
//    null != (r = document.querySelector(".navbar-sticky")) && (e = r.classList,
//      t = r.offsetHeight,
//      e.contains("navbar-floating") && e.contains("navbar-dark") ? window.addEventListener("scroll", function (e) {
//        500 < e.currentTarget.pageYOffset ? (r.classList.remove("navbar-dark"),
//          r.classList.add("navbar-light"),
//          r.classList.add("navbar-stuck")) : (r.classList.remove("navbar-stuck"),
//          r.classList.remove("navbar-light"),
//          r.classList.add("navbar-dark"))
//      }) : e.contains("navbar-floating") && e.contains("navbar-light") ? window.addEventListener("scroll", function (e) {
//        500 < e.currentTarget.pageYOffset ? r.classList.add("navbar-stuck") : r.classList.remove("navbar-stuck")
//      }) : window.addEventListener("scroll", function (e) {
//        500 < e.currentTarget.pageYOffset ? (document.body.style.paddingTop = t + "px",
//          r.classList.add("navbar-stuck")) : (document.body.style.paddingTop = "",
//          r.classList.remove("navbar-stuck"))
//      })),
