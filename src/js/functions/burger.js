// import { disableScroll } from '../functions/disable-scroll';
// import { enableScroll } from '../functions/enable-scroll';

// (function () {
//   const burger = document?.querySelector('[data-burger]');
//   const menu = document?.querySelector('[data-menu]');
//   const menuItems = document?.querySelectorAll('[data-menu-item]');

//   burger?.addEventListener('click', (e) => {
//     burger?.classList.toggle('burger--active');
//     menu?.classList.toggle('menu--active');

//     if (menu?.classList.contains('menu--active')) {
//       burger?.setAttribute('aria-expanded', 'true');
//       burger?.setAttribute('aria-label', 'close');
//       disableScroll();
//     } else {
//       burger?.setAttribute('aria-expanded', 'false');
//       burger?.setAttribute('aria-label', 'open');
//       enableScroll();
//     }
//   });


//   menuItems?.forEach(el => {
//     el.addEventListener('click', () => {
//       burger?.setAttribute('aria-expanded', 'false');
//       burger?.setAttribute('aria-label', 'Open menu');
//       burger.classList.remove('burger--active');
//       menu.classList.remove('menu--active');
//       enableScroll();
//     });
//   });
// })();

// const navigation = document.querySelector(".header");
// const page = document.querySelector(".page");
// navigation.addEventListener("click", BurgerBtnClick);
// function BurgerBtnClick(e) {
//   if (!e.target.parentNode.matches(".burger") && !e.target.matches(".burger")) return;
//   e.addEventListener;
//   this.classList.remove("closed");
//   page.classList.add("open");
//   if (this.matches(".opened")) {
//     this.classList.add("closed");
//     page.classList.remove("open");
//     setTimeout(() => {
//       this.classList.remove("opened");
//     }, 500);
//   }
//   this.classList.add("opened");
// }


