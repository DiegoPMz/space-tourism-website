import { locationActive } from './components/locationActive'
import './nav.css'

export const Nav = () => {
  const Nav = document.createElement('nav')
  Nav.classList.add('nav')
  Nav.innerHTML = `
    <div class="nav__div">
      <button class="nav__div-btn">
        <img class="nav__div-img" src="/shared/icon-close.svg" alt="" />
      </button>
    </div>
    <ul class="nav__list">
      <li class="nav__item">
        <a class="nav__link nav__link--active" href="#">
          <span class="nav__number">00</span>
          HOME
        </a>
      </li>
        <li class="nav__item">
          <a class="nav__link" href="#destination">
            <span class="nav__number">01</span>
            DESTINATION
          </a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#crew">
            <span class="nav__number">02</span>
            CREW
          </a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#technology">
            <span class="nav__number">03</span>
            TECHNOLOGY
          </a>
        </li>
    </ul>
  `

  locationActive(Nav)
  Nav.addEventListener('resize', () => locationActive(Nav))

  return Nav
}
