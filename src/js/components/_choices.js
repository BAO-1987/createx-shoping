
const elementChoices = Array.from(
  document.querySelectorAll(".choices-select")
);

if (elementChoices.length > 0) {
  elementChoices.forEach((el) => {
    const choicesNum = new Choices(el, {
      searchEnabled: false,
      itemSelectText: "",
    });
  });
}

