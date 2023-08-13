// const showButton = document.querySelector("[data-filters-show]");
// const hideButton = document.querySelector("[data-filters-hide]");
// const filtersColumns = document.querySelector("[data-filters-columns]");
// if (filtersColumns) {
//   hideButton.addEventListener("click", function (event) {
//     const targetSelector = event.target.dataset.filtersHide;
//     hideButton.classList.remove("hide");
//     showButton.classList.remove("show");
//     document.querySelector(targetSelector).classList.add("show");
//     filtersColumns.className = "catalog__content";
//   });

//   showButton.addEventListener("click", function (event) {
//     const targetSelector = event.target.dataset.filtersShow;
//     hideButton.classList.add("show");
//     showButton.classList.add("hide");
//     document.querySelector(targetSelector).classList.remove("show");
//     filtersColumns.className = "catalog__content";
//   });
// }

// const showButton = document.querySelector("[data-filters-show]");
// const hideButton = document.querySelector("[data-filters-hide]");
// const columnsContainer = document.querySelector("[data-filters-columns]");

// if (columnsContainer !== null) {
//   hideButton.addEventListener("click", function (event) {
//     const targetSelector = event.target.dataset.filtersHide;
//     hideButton.classList.remove("show");
//     showButton.classList.remove("hide");
//     document.querySelector(targetSelector).classList.add("hide");
//     columnsContainer.className = "catalog__content";
//   });

//   showButton.addEventListener("click", function (event) {
//     const targetSelector = event.target.dataset.filtersShow;
//     hideButton.classList.add("show");
//     showButton.classList.add("hide");
//     document.querySelector(targetSelector).classList.remove("hide");
//     columnsContainer.className = "catalog__content";
//   });
// }

// const showButton = document.querySelector("[data-filters-show]");
// const hideButton = document.querySelector("[data-filters-hide]");
// const columnsContainer = document.querySelector("[data-filters-columns]");

// if (columnsContainer) {
//   const toggleColumns = (targetSelector, hide) => {
//     const targetElement = document.querySelector(targetSelector);
//     if (targetElement) {
//       targetElement.classList.toggle("hide", hide);
//     }
//     hideButton.classList.toggle("show", hide);
//     showButton.classList.toggle("hide", !hide);
//   };

//   hideButton.addEventListener("click", (event) => {
//     toggleColumns(event.target.dataset.filtersHide, true);
//   });

//   showButton.addEventListener("click", (event) => {
//     toggleColumns(event.target.dataset.filtersShow, false);
//   });
// }


// const showButton = document.querySelector("[data-filters-show]");
// const hideButton = document.querySelector("[data-filters-hide]");
// const columnsContainer = document.querySelector("[data-filters-columns]");

// if (columnsContainer) {
//   const toggleColumns = (targetSelector, show) => {
//     const targetElement = document.querySelector(targetSelector);
//     if (targetElement) {
//       targetElement.classList.toggle("hide", !show);
//     }
//     hideButton.classList.toggle("show", show);
//     showButton.classList.toggle("hide", !show);
//   };

//   hideButton.addEventListener("click", (event) => {
//     toggleColumns(event.target.dataset.filtersHide, false);
//   });

//   showButton.addEventListener("click", (event) => {
//     toggleColumns(event.target.dataset.filtersShow, true);
//   });
// }


// document.addEventListener("DOMContentLoaded", () => {
//   const showButtons = document.querySelectorAll("[data-filters-show]");
//   const hideButtons = document.querySelectorAll("[data-filters-hide]");
//   const columnsContainer = document.querySelector("[data-filters-columns]");

//   // showButtons.forEach((showButton) => {
//   //   showButton.addEventListener("click", () => {
//   //     const targetSelector = showButton.dataset.filtersShow;
//   //     const targetElement = document.querySelector(targetSelector);
//   //     if (targetElement) {
//   //       targetElement.classList.remove("hide");
//   //     }
//   //     hideButton.classList.add("show");
//   //     showButton.classList.add("hide");
//   //   });
//   // });

//   // hideButtons.forEach((hideButton) => {
//   //   hideButton.addEventListener("click", () => {
//   //     const targetSelector = hideButton.dataset.filtersHide;
//   //     const targetElement = document.querySelector(targetSelector);
//   //     if (targetElement) {
//   //       targetElement.classList.add("hide");
//   //     }
//   //     hideButton.classList.remove("show");
//   //     showButton.classList.remove("hide");
//   //   });
//   // });

//   showButtons.forEach(button => {
//     button.addEventListener("click", function () {
//       const targetSelector = button.getAttribute("data-filters-show");
//       const targetElement = document.querySelector(targetSelector);
//       if (targetElement) {
//         targetElement.style.display = "block";
//       }
//     });
//   });

//   hideButtons.forEach(button => {
//     button.addEventListener("click", function () {
//       const targetSelector = button.getAttribute("data-filters-hide");
//       const targetElement = document.querySelector(targetSelector);
//       if (targetElement) {
//         targetElement.style.display = "none";
//       }
//     });
//   });
// });

// Query DOM elements
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
