document.addEventListener("click", (e) => {
  if (!e.target.matches(".languages__span")) {
    document
      .querySelector(".languages__list")
      .classList.remove("open");
  } else {
    e.target.nextElementSibling.classList.add("open");
  }
});



