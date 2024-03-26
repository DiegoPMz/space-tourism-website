import './header.css'

export const Header = () => {
  const Header = document.createElement('header')
  Header.classList.add('header')
  Header.innerHTML = `
  <a href="#" class="header__link-logo">
    <img class="header__logo" src="/shared/logo.svg" alt="" />
  </a>
  <button class="header__dropBtn">
    <img
    class="header__dropBtn-hamburger"
    src="/shared/icon-hamburger.svg"
    alt=""
    />
  </button>
  `

  return Header
}
