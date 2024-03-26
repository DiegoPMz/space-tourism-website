export const hashRoutes = ({ Nav, locationHash }) => {
  const elementLinks = Nav.querySelectorAll('.nav__link')
  const arrayAllLinks = [...elementLinks]

  const HASH_RUTES = {
    '': () => {
      const elementToActive = arrayAllLinks.find(el => el.getAttribute('href') === '#')
      return { elementToActive }
    },
    '#destination': () => {
      const elementToActive = arrayAllLinks.find(el => el.getAttribute('href') === '#destination')
      return { elementToActive }
    },
    '#crew': () => {
      const elementToActive = arrayAllLinks.find(el => el.getAttribute('href') === '#crew')
      return { elementToActive }
    },
    '#technology': () => {
      const elementToActive = arrayAllLinks.find(el => el.getAttribute('href') === '#technology')
      return { elementToActive }
    }
  }

  const ROUTE = HASH_RUTES[locationHash]
  const { elementToActive } = ROUTE()
  return { elementToActive }
}
