const grid = document.querySelector(".services__list");
// const cards = document.querySelectorAll(".card");

// const gridSize = grid.getBoundingClientRect();

document.addEventListener("mousemove", (e) => {
  grid.style.setProperty("--x", e.x + "px");
  grid.style.setProperty("--y", e.y + "px");
});

