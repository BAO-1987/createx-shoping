const showPasswordCheckboxes = document.querySelectorAll('.show-password__input');
showPasswordCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    const passwordInput = checkbox.parentNode.parentNode.querySelector('.form__input--password');
    passwordInput.type = checkbox.checked ? 'text' : 'password';
  });
});

