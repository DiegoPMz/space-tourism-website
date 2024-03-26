import { Menu } from '../../components/menu/Menu'
import { animationRotate, animationShowContent } from './components/animations'
import './home.css'

export const Home = () => {
  const Home = document.createElement('section')
  Home.classList.add('home-general')
  Home.innerHTML = `
  <div class="home">
  <div class="home__div">
  <h1 class="home__title">
    SO, YOU WANT TO TRAVEL TO
    <span class="home__title-span">SPACE</span>
  </h1>
  <p class="home__text">
    Let’s face it; if you want to go to space, you might as well
    genuinely go to outer space and not hover kind of on the edge of it.
    Well sit back, and relax because we’ll give you a truly out of this
    world experience!
  </p>
  <div class="home__circle">EXPLORE</div>
</div>
</div>
  `

  Home.insertAdjacentElement('afterbegin', Menu())

  animationRotate([Home.querySelector('.home__circle')])
  animationShowContent([
    Home.querySelector('.home__title'),
    Home.querySelector('.home__text')
  ])

  return Home
}
