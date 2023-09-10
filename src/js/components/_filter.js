const showFiltersButton = document.querySelector("[data-filters-show]");
const cataloWrapper = document.querySelector(".catalog__wrapper");
const hideFiltersButton = document.querySelector("[data-filters-hide]");
const filtersColumnsElement = document.querySelector("[data-filters-columns]");

if (filtersColumnsElement) {
  // Add event listener for hiding filters
  hideFiltersButton.addEventListener("click", function (event) {
    const targetSelector = event.target.dataset.filtersHide;
    hideFiltersButton.classList.remove("show");
    showFiltersButton.classList.remove("hide");
    document.querySelector(targetSelector).classList.add("hide");
    filtersColumnsElement.className = "catalog__content active";
    cataloWrapper.classList.remove("active");
  });

  // Add event listener for showing filters
  showFiltersButton.addEventListener("click", function (event) {
    const targetSelector = event.target.dataset.filtersShow;
    hideFiltersButton.classList.add("show");
    showFiltersButton.classList.add("hide");
    document.querySelector(targetSelector).classList.remove("hide");
    filtersColumnsElement.className = "catalog__content";
    cataloWrapper.classList.add("active");
  });
}
