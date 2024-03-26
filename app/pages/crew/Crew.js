import { Menu } from '../../components/menu/Menu'
import { animationChangeImage, animationShowContent } from './components/animations'
import { changeTextContet } from './components/changeTextContet'
import { Slider } from './components/slider'
import './crew.css'

export const Crew = () => {
  const Crew = document.createElement('section')
  Crew.classList.add('crew-general')
  Crew.innerHTML = `
  <div class="crew">
    <h2 class="crew__title">
      <span class="crew__title-span">02</span>
      Meet your crew
    </h2>
    <div class="crew__main">
      <div class="crew__main-picture">
        <div data-index="1" class="crew__main-image crew__main-image--one"></div>
      </div>
      <div class="crew__main-content">
        <div class="crew__main-slider">
          <button class="crew__main-slider-circle crew__main-slider-circle--active"></button>
          <button class="crew__main-slider-circle"></button>
          <button class="crew__main-slider-circle"></button>
          <button class="crew__main-slider-circle"></button>
        </div>

        <div class="crew__main-text">
          <span class="crew__main-topTitle">Commander </span>
          <h3 class="crew__main-title">Douglas Hurley</h3>
          <p class="crew__main-paragraph">
            Douglas Gerald Hurley is an American engineer, former Marine
            Corps pilot and former NASA astronaut. He launched into space
            for the third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
      </div>
    </div>
  </div>
`
  Crew.insertAdjacentElement('afterbegin', Menu())

  const buttons = Crew.querySelectorAll('.crew__main-slider-circle')
  const { crewInterval } = Slider(buttons)
  changeTextContet(Crew)

  animationShowContent([
    Crew.querySelector('.crew__main-topTitle'),
    Crew.querySelector('.crew__main-title'),
    Crew.querySelector('.crew__main-paragraph')
  ])
  animationChangeImage([Crew.querySelector('.crew__main-image')])

  return { crew: Crew, crewInterval }
}
