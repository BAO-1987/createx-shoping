
function initializeSteppers() {
  const stepperElements = document.querySelectorAll('.stepper');

  stepperElements.forEach((stepperElement) => {
    const stepperInput = stepperElement.querySelector('.stepper__input');
    const stepperBtnUp = stepperElement.querySelector('.stepper__btn--up');
    const stepperBtnDown = stepperElement.querySelector('.stepper__btn--down');

    let count = stepperInput.value;

    function isNotApple() {
      return !/iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    function allowNumbersOnly(e) {
      const code = e.which || e.keyCode;
      if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
      }
    }

    function updateStepper() {
      if (stepperInput.value === '') {
        stepperInput.value = 1;
      }

      count = parseInt(stepperInput.value, 10);

      if (count === 1) {
        stepperBtnDown.classList.add('stepper__btn--disabled');
      } else {
        stepperBtnDown.classList.remove('stepper__btn--disabled');
      }

      if (isNotApple()) {
        stepperInput.style.width = `${stepperInput.value.length + 1}ex`;
      } else {
        stepperInput.style.width = `${stepperInput.value.length + 2}ex`;
      }
    }

    stepperInput.addEventListener('keyup', updateStepper);
    stepperInput.addEventListener('keypress', allowNumbersOnly);
    stepperInput.addEventListener('change', updateStepper);

    stepperBtnUp.addEventListener('click', (e) => {
      e.preventDefault();
      count++;
      stepperInput.value = count;
      updateStepper();
    });

    stepperBtnDown.addEventListener('click', (e) => {
      e.preventDefault();
      if (count > 1) {
        count--;
        stepperInput.value = count;
        updateStepper();
      }
    });

    // Initialize the stepper
    updateStepper();
  });
}

// Call the function to initialize all steppers on the page with the same class names
initializeSteppers();
