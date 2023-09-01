//  const choices = new Choices('.choices');
const defaultSelect = () => {
  const element = document.querySelector('.choices-select');
  const choices = new Choices(element, {
    // searchEnabled: false,
    noResultsText: 'no result'
  });

  let ariaLabel = element.getAttribute('aria-label');
  element.closest('.choices').setAttribute('aria-label', ariaLabel);
};

defaultSelect()
