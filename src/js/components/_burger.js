const navigation = document.querySelector(".header");
const page = document.querySelector(".page");
navigation.addEventListener("click", BurgerBtnClick);
function BurgerBtnClick(e) {
  if (!e.target.parentNode.matches(".burger") && !e.target.matches(".burger")) return;
  e.addEventListener;
  this.classList.remove("closed");
  page.classList.add("open");
  if (this.matches(".opened")) {
    this.classList.add("closed");
    page.classList.remove("open");
    setTimeout(() => {
      this.classList.remove("opened");
    }, 500);
  }
  this.classList.add("opened");
}

const buttons = document.querySelectorAll(".burger");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  });
});

