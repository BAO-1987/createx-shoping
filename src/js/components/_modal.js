// const buttons = document.querySelectorAll(".modal__btn");
// const page = document.querySelector(".page");
// const closeButtons = document.querySelectorAll("[data-modal-close]");
// let currentModal = null;

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const modalId = event.target.dataset.modal;
//     const modal = document.getElementById(modalId);
//     if (modal && modal !== currentModal) {
//       if (currentModal) {
//         currentModal.close();
//       }
//       modal.showModal();
//       currentModal = modal;
//       page.classList.add("dis-scroll");
//     }
//   });
// });

// closeButtons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const modal = event.target.closest('dialog');
//     if (modal && modal === currentModal) {
//       modal.close();
//       currentModal = null;
//       page.classList.remove("dis-scroll");
//     }
//   });
// });




const buttons = document.querySelectorAll(".modal__btn");
const page = document.querySelector(".page");
const closeButtons = document.querySelectorAll("[data-modal-close]");
const modals = document.querySelectorAll("dialog");
let currentModal = null;

function openModal(modal) {
  if (modal && modal !== currentModal) {
    if (currentModal) {
      closeModal(currentModal);
    }
    modal.showModal();
    currentModal = modal;
    page.classList.add("dis-scroll");
  }
}

function closeModal(modal) {
  if (modal) {
    modal.setAttribute("closing", "");

    modal.addEventListener(
      "animationend",
      () => {
        modal.removeAttribute("closing");
        modal.close();
      }, {
        once: true
      }
    );

    page.classList.remove("dis-scroll");
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const modalId = event.target.dataset.modal;
    const modal = document.getElementById(modalId);
    openModal(modal);
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeModal(currentModal);
  });
});

modals.forEach((modal) => {
  modal.addEventListener("close", () => {
    currentModal = null;
  });
});
