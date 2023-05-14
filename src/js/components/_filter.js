// const filters = document.querySelectorAll('.filter');

// filters.forEach(filter => {

//   filter.addEventListener('click', function () {

//     let selectedFilter = filter.getAttribute('data-filter');
//     let itemsToHide = document.querySelectorAll(`.single-reviews__list .single-reviews__item:not([data-filter='${selectedFilter}'])`);
//     let itemsToShow = document.querySelectorAll(`.single-reviews__list[data-filter='${selectedFilter}']`);

//     if (selectedFilter == 'all') {
//       itemsToHide = [];
//       itemsToShow = document.querySelectorAll('.single-reviews__list [data-filter]');
//     }

//     itemsToHide.forEach(el => {
//       el.classList.add('hide');
//       el.classList.remove('show');
//     });

//     itemsToShow.forEach(el => {
//       el.classList.remove('hide');
//       el.classList.add('show');
//     });

//   });

const filters = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.single-reviews__item');

filters.forEach(filter => {
  filter.addEventListener('click', function () {
    const selectedFilter = filter.getAttribute('data-filter');

    items.forEach(item => {
      if (selectedFilter === 'all' || item.getAttribute('data-filter') === selectedFilter) {
        item.classList.remove('hide');
        item.classList.add('show');
      } else {
        item.classList.remove('show');
        item.classList.add('hide');
      }
    });
  });
});

