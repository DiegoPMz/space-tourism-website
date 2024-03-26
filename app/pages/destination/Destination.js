import { Menu } from '../../components/menu/Menu'
import { animationRotate, animationShowContent, animationTitles } from './animations'
import { changeContent } from './changeContent'
import './destination.css'

export const Destination = () => {
  const Destination = document.createElement('section')
  Destination.classList.add('destination-general')
  Destination.innerHTML = `
  <div class="destination">
  <h2 class="destination__title">
    <span class="destination__title-number"> 01 </span>
    Pick your destination
  </h2>
  <div class="destination__main">
    <section class="destination__main-planet">
      <div class="destination__planet-image"></div>
    </section>
    <section class="destination__main-content">
      <div class="destination__content-options">
        <button class="destination__content-options-btn destination__content-options-btn--active">MOON</button>
        <button class="destination__content-options-btn">MARS</button>
        <button class="destination__content-options-btn">EUROPA</button>
        <button class="destination__content-options-btn">TITAN</button>
      </div>
      <div class="destination__content-text">
        <h3 class="destination__content-title">MOON</h3>
        <p class="destination__content-paragraph">
          See our planet as you’ve never seen it before. A perfect
          relaxing trip away to help regain perspective and come back
          refreshed. While you’re there, take in some history by
          visiting the Luna 2 and Apollo 11 landing sites.
        </p>
      </div>

      <div class="destination__content-planetValues">
        <div class="destination__content-value">
          <span class="content-value__topTitle ">AVG. DISTANCE</span>
          <span class="content-value__paragraph content-value__distance">384,400 km</span>
        </div>
        <div class="destination__content-value">
          <span class="content-value__topTitle">Est. travel time</span>
          <span class="content-value__paragraph content-value__travel">3 days</span>
        </div>
      </div>
    </section>
  </div>
</div>
  `
  Destination.insertAdjacentElement('afterbegin', Menu())
  changeContent(Destination)

  animationTitles([Destination.querySelector('.destination__content-title')])
  animationShowContent([
    Destination.querySelector('.destination__content-paragraph'),
    Destination.querySelector('.content-value__distance'),
    Destination.querySelector('.content-value__travel'),
    Destination.querySelectorAll('.content-value__topTitle')
  ])
  animationRotate([Destination.querySelector('.destination__planet-image')])

  return Destination
}
