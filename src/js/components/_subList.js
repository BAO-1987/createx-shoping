document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button-sub]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown-sub]")
    currentDropdown.classList.toggle("open")
  }

  document.querySelectorAll("[data-dropdown-sub].open").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("open")
  })
})
