const accordion = document?.querySelector(".accordion__list");

if (accordion) {
  accordion.addEventListener("click", (e) => {
    const activePanel = e.target.closest(".accordion__item");
    if (!activePanel) return;
    toggleAccordion(activePanel);
  });
}

function toggleAccordion(panelToActivate) {
  const activeButton = panelToActivate.querySelector(".accordion__btn");
  const activePanel = panelToActivate.querySelectorAll(".accordion__item");
  const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

  if (activePanelIsOpened === "true") {
    panelToActivate
      .querySelector(".accordion__btn")
      .setAttribute("aria-expanded", false);

    panelToActivate
      .querySelector(".accordion__content")
      .setAttribute("aria-hidden", true);
  } else {
    panelToActivate.querySelector(".accordion__btn").setAttribute("aria-expanded", true);

    panelToActivate
      .querySelector(".accordion__content")
      .setAttribute("aria-hidden", false);
  }
}


