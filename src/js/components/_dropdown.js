document.addEventListener("click", e => {
  const DropdownButton = e.target.matches("[data-dropdown-button]")
  if (!DropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (DropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("open")
  }

  document.querySelectorAll("[data-dropdown].open").forEach(dropDown => {
    if (dropDown === currentDropdown) return
    dropDown.classList.remove("open")
  })
})
