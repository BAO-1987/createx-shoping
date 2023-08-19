const page = document.querySelector(".page");
const showFiltersButton = document.querySelector("[data-filters-show]");
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
  });

  // Add event listener for showing filters
  showFiltersButton.addEventListener("click", function (event) {
    const targetSelector = event.target.dataset.filtersShow;
    hideFiltersButton.classList.add("show");
    showFiltersButton.classList.add("hide");
    document.querySelector(targetSelector).classList.remove("hide");
    filtersColumnsElement.className = "catalog__content";
  });
}
