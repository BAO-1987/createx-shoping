(function () {
  const logo = document.querySelector('[data-logo]');
  const headerAction = document.querySelector('[data-hide]');
  const formSearch = document.querySelector('[data-search]');
  const mobileFormBtn = document.querySelector('[data-search-button]');
  const formClose = document.querySelectorAll('.form-search__close');

  mobileFormBtn?.addEventListener('click', (e) => {
    formSearch.classList.toggle('open');
    headerAction.classList.toggle('hidden');
    mobileFormBtn.classList.toggle('hidden');
    logo.classList.toggle('hidden');
  });

  formClose?.forEach(el => {
    el.addEventListener('click', () => {
      logo.classList.remove('hidden');
      headerAction.classList.remove('hidden');
      formSearch.classList.remove('open');
      mobileFormBtn.classList.remove('hidden');
    });
  });
})();
