import { Menu } from '../../components/menu/Menu'
import { animationChangeImage, animationShowContent } from './components/animations'
import { changeTextContet } from './components/changeTextContet'
import { Slider } from './components/slider'
import './technology.css'

export const Technology = () => {
  const Technology = document.createElement('section')
  Technology.classList.add('technology-general')

  Technology.innerHTML = `
  <div class="technology">
  <h2 class="technology__title">
  <span class="technology__title-span">03</span>
    SPACE LAUNCH 101
  </h2>
  <div class="technology__main">
    <div class="main__img" data-index="1"></div>
    <div class="main__content">
      <div class="main__container-circles">
        <button class="main__circles main__circles--active">1</button>
        <button class="main__circles">2</button>
        <button class="main__circles">3</button>
      </div>
      <div class="main__text">
        <h3 class="main__title">
          <span class="main__title-span">THE TERMINOLOGY…</span>
          <span class="main__title-h">LAUNCH VEHICLE</span>
        
        </h3>
        <p class="main__paragraph">
        A launch vehicle or carrier rocket is a rocket-propelled vehicle
        used to carry a payload from Earth's surface to space, usually
        to Earth orbit or beyond. Our WEB-X carrier rocket is the most
        powerful in operation. Standing 150 metres tall, it's quite an
        awe-inspiring sight on the launch pad!
        </p>
      </div>
    </div>
  </div>
  </div>
  `
  Technology.insertAdjacentElement('afterbegin', Menu())

  const buttons = Technology.querySelectorAll('.main__circles')
  Slider(buttons)
  changeTextContet(Technology)

  animationShowContent([
    Technology.querySelector('.main__title'),
    Technology.querySelector('.main__paragraph')
  ])
  animationChangeImage([Technology.querySelector('.main__img')])

  return Technology
}
