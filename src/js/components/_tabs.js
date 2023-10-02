// const stepper = document.querySelector('.stepper');
// const stepperInput = stepper.querySelector('.stepper__input');
// const stepperBtnUp = stepper.querySelector('.stepper__btn--up');
// const stepperBtnDown = stepper.querySelector('.stepper__btn--down');

// let count = stepperInput.value;

// const isNotApple = () => {
//   if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
//     return false;
//   }
//   return true;
// };

// function allowNumbersOnly(e) {
//   var code = (e.which) ? e.which : e.keyCode;
//   if (code > 31 && (code < 48 || code > 57)) {
//     e.preventDefault();
//   }
// }

// stepperInput.addEventListener('keyup', (e) => {
//   let self = e.currentTarget;

//   if (self.value == '0') {
//     self.value = 1;
//   }

//   if (isNotApple) {
//     self.style.width = `${self.value.length + 1}ex`;
//   } else {
//     self.style.width = `${self.value.length + 2}ex`;
//   }

//   count = stepperInput.value;

//   if (count == 1) {
//     stepperBtnDown.classList.add('stepper__btn--disabled');
//   } else {
//     stepperBtnDown.classList.remove('stepper__btn--disabled');
//   }
// });

// stepperInput.addEventListener('keypress', (e) => {
//   allowNumbersOnly(e);
// });

// stepperInput.addEventListener('change', (e) => {
//   let self = e.currentTarget;

//   if (!self.value) {
//     self.value = 1;
//   }

//   count = stepperInput.value;

//   if (count == 1) {
//     stepperBtnDown.classList.add('stepper__btn--disabled');
//   } else {
//     stepperBtnDown.classList.remove('stepper__btn--disabled');
//   }
// });

// stepperBtnUp.addEventListener('click', (e) => {
//   e.preventDefault();

//   count++;

//   if (count == 1) {
//     stepperBtnDown.classList.add('stepper__btn--disabled');
//   } else {
//     stepperBtnDown.classList.remove('stepper__btn--disabled');
//   }

//   stepperInput.value = count;

//   if (isNotApple) {
//     stepperInput.style.width = `${stepperInput.value.length + 1}ex`;
//   } else {
//     stepperInput.style.width = `${stepperInput.value.length + 2}ex`;
//   }
// });

// stepperBtnDown.addEventListener('click', (e) => {
//   e.preventDefault();

//   count--;

//   if (count == 1) {
//     stepperBtnDown.classList.add('stepper__btn--disabled');
//   } else {
//     stepperBtnDown.classList.remove('stepper__btn--disabled');
//   }

//   stepperInput.value = count;

//   if (isNotApple) {
//     stepperInput.style.width = `${stepperInput.value.length + 1}ex`;
//   } else {
//     stepperInput.style.width = `${stepperInput.value.length + 2}ex`;
//   }
// });

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
