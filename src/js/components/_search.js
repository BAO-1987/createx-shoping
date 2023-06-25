// // (function () {
// //   const logo = document.querySelector('[data-logo]');
// //   const headerAction = document.querySelector('[data-hide]');
// //   const formSearch = document.querySelector('[data-search]');
// //   const formClose = document.querySelector('[data-close]');

// //   formSearch?.addEventListener('click', function (e) {
// //     formSearch.classList.toggle('open');
// //     headerAction.classList.toggle('hidden');
// //     logo.classList.toggle('hidden');
// //   });

// //   formClose?.forEach(el => {
// //     el.addEventListener('click', () => {
// //       logo.classList.remove('hidden');
// //       headerAction.classList.remove('hidden');
// //       formSearch.classList.remove('open');
// //     });
// //   });
// // })();

// (function () {
//   const logo = document.querySelector('[data-logo]');
//   const headerAction = document.querySelector('[data-hide]');
//   const formSearch = document.querySelector('[data-search]');
//   const formClose = document.querySelector('form-search__close');

//   formSearch?.addEventListener('click', function (e) {
//     formSearch.classList.toggle('open');
//     headerAction.classList.toggle('hidden');
//     logo.classList.toggle('hidden');
//   });

//   if (formClose) {
//     formClose.addEventListener('click', function () {
//       logo.classList.remove('hidden');
//       headerAction.classList.remove('hidden');
//       formSearch.classList.remove('open');
//     });
//   }
// })();


(function () {
  const logo = document.querySelector('[data-logo]');
  const headerAction = document.querySelector('[data-hide]');
  const formSearch = document.querySelector('[data-search]');
  const formClose = document.querySelector('form-search__close');

  formSearch?.addEventListener('click', function (e) {
    formSearch.classList.toggle('open');
    headerAction.classList.toggle('hidden');
    logo.classList.toggle('hidden');
  });

  formClose?.addEventListener('click', function (e) {
    logo.classList.remove('hidden');
    headerAction.classList.remove('hidden');
    formSearch.classList.remove('open');
  });
})();

