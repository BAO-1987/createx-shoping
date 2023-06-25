(function () {
  const logo = document.querySelector('[data-logo]');
  const headerAction = document.querySelector('[data-hide]');
  const formSearch = document.querySelector('[data-search]');
  const formClose = document.querySelector('form-search__close');

  formSearch?.addEventListener('click', (e) => {
    formSearch.classList.toggle('open');
    headerAction.classList.toggle('hidden');
    logo.classList.toggle('hidden');
  });

  formClose?.forEach(el => {
    el.addEventListener('click', () => {
      logo.classList.remove('hidden');
      headerAction.classList.remove('hidden');
      formSearch.classList.remove('open');
    });
  });
})();

