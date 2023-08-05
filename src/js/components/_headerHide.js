// "use strict";

// function optimizeNavbar() {
//   const navbarSticky = document.querySelector(".header__middle");

//   if (navbarSticky) {
//     const offsetHeight = navbarSticky.offsetHeight;
//     const navbarClassList = navbarSticky.classList;

//     function updateNavbarStuckClass() {
//       const scrollTop = window.pageYOffset;

//       if (scrollTop > 500) {d
//         if (navbarClassList.contains("navbar-floating")) {
//           if (navbarClassList.contains("navbar-dark")) {
//             navbarClassList.remove("navbar-dark");
//             navbarClassList.add("navbar-light");
//          }
//         }
//         else if (navbarClassList.contains("header__middle")) {
//           navbarClassList.add("navbar-stuck");
//         }
//       } else {
//         navbarClassList.remove("navbar-stuck");
//         if (navbarClassList.contains("navbar-floating")) {
//           if (navbarClassList.contains("navbar-light")) {
//             navbarClassList.remove("navbar-light");
//             navbarClassList.add("navbar-dark");
//           }
//         }
//       }
//     }

//     window.addEventListener("scroll", updateNavbarStuckClass);

//     // Set initial state
//     updateNavbarStuckClass();
//   }
// }

// // Call the function to optimize the navbar behavior
// optimizeNavbar();


(function () {
  const doc = document.documentElement;
  const w = window;

  let curScroll;
  let prevScroll = w.scrollY || doc.scrollTop;
  let curDirection = 0;
  let prevDirection = 0;

  const header = document.querySelector(".header");
  let toggled;
  const threshold = 200;

  const checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      // scrolled down
      curDirection = 2;
    } else {
      //scrolled up
      curDirection = 1;
    }

    if (curDirection !== prevDirection) {
      toggled = toggleHeader();
    }

    prevScroll = curScroll;
    if (toggled) {
      prevDirection = curDirection;
    }
  };

  const toggleHeader = function () {
    toggled = true;
    if (curDirection === 2 && curScroll > threshold) {
      header.classList.add("hidden");
    } else if (curDirection === 1) {
      header.classList.remove("hidden");
    } else {
      toggled = false;
    }
    return toggled;
  };

  window.addEventListener("scroll", checkScroll);
})();
