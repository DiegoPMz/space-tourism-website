export const applyActiveStyle = (Nav, elementToActive, classActive) => {
  const classByResolution = `.${classActive}`
  const prevElementActive = Nav.querySelector(classByResolution)

  if (prevElementActive) {
    prevElementActive.classList.remove(classActive)

    elementToActive.classList.add(classActive)
  } else {
    elementToActive.classList.add(classActive)
  }
}
