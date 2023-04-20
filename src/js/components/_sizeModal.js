const modal = document.querySelector("#size");
const openModal = document.querySelector(".btn__size");
const closeModal = document.querySelector(".size__close");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
