const buttons = document.querySelectorAll(".modal__btn");
const closeButtons = document.querySelectorAll("[data-modal-close]");
let currentModal = null;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const modalId = event.target.dataset.modal;
    const modal = document.getElementById(modalId);
    if (modal && modal !== currentModal) {
      if (currentModal) {
        currentModal.close();
      }
      modal.showModal();
      currentModal = modal;
      document.body.classList.add(".open");
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const modal = event.target.closest('dialog');
    if (modal && modal === currentModal) {
      modal.close();
      currentModal = null;
    }
  });
});




