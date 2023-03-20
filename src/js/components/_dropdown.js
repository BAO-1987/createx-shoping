document.addEventListener('DOMContentLoaded', () => {
  /*
  	1. по клику на пункты верхнего меню открывать дропдаун
  	2. по клику (повторному) на эти пункты - закрывать дропдаун
  	3. по клику в любое место сайта, кроме меню - закрывать дропдаун
  */

  const menuBtns = document.querySelectorAll('.nav__link--dropdown');
  const drops = document.querySelectorAll('.nav__list--dropdown');

  menuBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.nav__item').querySelector('.nav__list--dropdown');

      drops.forEach(el => {
        if (el !== drop) {
          el.classList.remove('open');
        }
      });

      drop.classList.toggle('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav')) {


      drops.forEach(el => {
        el.classList.remove('open');
      });
    }
  });
});
