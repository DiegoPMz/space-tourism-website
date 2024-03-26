import { Header } from '../header/Header'
import { Nav } from '../nav/Nav'
import { animationShowMenu, animationShowMenuR } from './animation'

export const Menu = () => {
  const Menu = Header()
  const btnHamburger = Menu.querySelector('.header__dropBtn')

  const MenuInMobile = () => {
    const navElement = Menu.querySelector('.nav')
    if (navElement) Menu.removeChild(navElement)
  }

  const MenuInDekstop = () => {
    const navElement = Menu.querySelector('.nav')

    if (navElement) {
      btnHamburger.classList.remove('header__dropBtn--open')
      return
    }

    Menu.appendChild(Nav())
  }

  if (window.innerWidth < 768) MenuInMobile()
  else if (window.innerWidth > 768) MenuInDekstop()

  btnHamburger.addEventListener('click', (e) => {
    Menu.appendChild(Nav())
    btnHamburger.classList.add('header__dropBtn--open')

    animationShowMenu(Menu.querySelector('.nav'))

    closeMenuHamburger(Menu, btnHamburger)
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      MenuInMobile()
    } else if (window.innerWidth > 768) {
      MenuInDekstop()
    }
  })

  return Menu
}

const closeMenuHamburger = (Menu, btnHamburger) => {
  const closeHamburger = Menu.querySelector('.nav__div-btn')
  const navElement = Menu.querySelector('.nav')

  closeHamburger.addEventListener('click', () => {
    animationShowMenuR(navElement)

    setTimeout(() => {
      Menu.removeChild(navElement)
      btnHamburger.classList.remove('header__dropBtn--open')
    }, 400)
  })
}
