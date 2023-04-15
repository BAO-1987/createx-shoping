document.addEventListener("click", e => {
  const DropdownButton = e.target.matches("[dropdown-button]")
  if (!DropdownButton && e.target.closest("[dropdown]") != null) return

  let currentDropdown
  if (DropdownButton) {
    currentDropdown = e.target.closest("[dropdown]")
    currentDropdown.classList.toggle("open")
  }

  document.querySelectorAll("[dropdown].open").forEach(dropDown => {
    if (dropDown === currentDropdown) return
    dropDown.classList.remove("open")
  })
})
