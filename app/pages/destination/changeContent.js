import {
  animationRotate,
  animationShowContent,
  animationTitles,
} from './animations'

export const changeContent = (Destination) => {
  const buttons = Destination.querySelectorAll(
    '.destination__content-options-btn',
  )

  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => changeImage({ e, Destination }))
    btn.addEventListener('click', (e) => changeText({ e, Destination }))
    btn.addEventListener('click', (e) => clickActive({ e, buttons }))
  })
}

const changeImage = ({ e, Destination }) => {
  const planetImage = Destination.querySelector('.destination__planet-image')
  const planetToShow = e.target.textContent

  const PLANET_VALUES = {
    MOON: '/destination/image-moon.webp',
    MARS: '/destination/image-mars.webp',
    EUROPA: '/destination/image-europa.webp',
    TITAN: '/destination/image-titan.webp',
  }

  const planetURL = PLANET_VALUES[planetToShow]
  planetImage.style.backgroundImage = `url(${planetURL})`
  animationRotate([planetImage])
}

const changeText = ({ e, Destination }) => {
  const planetTitle = Destination.querySelector('.destination__content-title')
  const planetParagraph = Destination.querySelector(
    '.destination__content-paragraph',
  )
  const planetDistance = Destination.querySelector('.content-value__distance')
  const planetTravel = Destination.querySelector('.content-value__travel')
  const titleValues = Destination.querySelectorAll('.content-value__topTitle')

  const planetToShow = e.target.textContent

  const contentDefault = {
    title: '',
    paragraph: '',
    distance: '',
    travel: '',
  }

  const CONTENT_TEXT = {
    MOON: () => {
      const contentValues = {
        ...contentDefault,
        title: 'MOON',
        paragraph:
          'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        travel: '3 days',
      }
      return contentValues
    },
    MARS: () => {
      const contentValues = {
        ...contentDefault,
        title: 'MARS',
        paragraph:
          'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 MIL. km',
        travel: '9 months',
      }
      return contentValues
    },
    EUROPA: () => {
      const contentValues = {
        ...contentDefault,
        title: 'EUROPA',
        paragraph:
          'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 MIL. km',
        travel: '3 years',
      }
      return contentValues
    },
    TITAN: () => {
      const contentValues = {
        ...contentDefault,
        title: 'TITAN',
        paragraph:
          'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 BIL. km',
        travel: '7 years',
      }
      return contentValues
    },
  }

  const planetContent = CONTENT_TEXT[planetToShow]
  const { title, paragraph, distance, travel } = planetContent()

  planetTitle.textContent = title
  planetParagraph.textContent = paragraph
  planetDistance.textContent = distance
  planetTravel.textContent = travel

  animationTitles([planetTitle])
  animationShowContent([
    planetParagraph,
    planetDistance,
    planetTravel,
    titleValues,
  ])
}

const clickActive = ({ e, buttons }) => {
  const allButtons = [...buttons]
  const classActive = 'destination__content-options-btn--active'

  if (e.target.classList.contains(classActive)) return

  const removeClass = allButtons.find((el) =>
    el.classList.contains(classActive),
  )
  removeClass.classList.remove(classActive)

  e.target.classList.add(classActive)
}
