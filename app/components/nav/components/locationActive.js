import { applyActiveStyle } from './applyActiveStyle'
import { hashRoutes } from './hashRoutes'

export const locationActive = (Nav) => {
  const locationHash = location.hash

  if (window.innerWidth < 768) activeLess768({ Nav, locationHash })

  else if (window.innerWidth >= 768) {
    const linkLess768 = Nav.querySelector('.nav__link--active')
    linkLess768 && linkLess768.classList.remove('nav__link--active')

    activeGreater768({ Nav, locationHash })
  }
}

const activeLess768 = ({ Nav, locationHash }) => {
  const classActive = 'nav__link--active'
  const { elementToActive } = hashRoutes({ Nav, locationHash })

  applyActiveStyle(Nav, elementToActive, classActive)
}

const activeGreater768 = ({ Nav, locationHash }) => {
  const classActive = 'nav__item--active'
  const { elementToActive } = hashRoutes({ Nav, locationHash })

  applyActiveStyle(Nav, elementToActive.parentElement, classActive)
}
