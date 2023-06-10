const modal = document.querySelector("[data-modal]");
const openModal = document.querySelector("[data-modal-open]");
const openModalSing = document.querySelector("[data-modal-open-sing]");
const closeModal = document.querySelector("[data-modal-close]");

openModal.addEventListener("click", () => {
  modal.showModal();
});

// openModalSing.addEventListener("click", () => {
//   modal.showModal();
// });

closeModal.addEventListener("click", () => {
  modal.close();
});

