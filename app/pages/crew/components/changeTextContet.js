import { animationChangeImage, animationShowContent } from './animations'

export const changeTextContet = (Crew) => {
  const topTitleElement = Crew.querySelector('.crew__main-topTitle')
  const titleElement = Crew.querySelector('.crew__main-title')
  const paragraphElement = Crew.querySelector('.crew__main-paragraph')
  const image = Crew.querySelector('.crew__main-image')

  const crewTexts = {
    topTitle: '',
    title: '',
    paragraph: ''
  }

  const CHANGE_TEXT = {
    1: () => {
      const newContent = {
        ...crewTexts,
        topTitle: 'Commander',
        title: 'Douglas Hurley',
        paragraph: ' Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
      }
      return newContent
    },

    2: () => {
      const newContent = {
        ...crewTexts,
        topTitle: 'Mission Specialist ',
        title: 'MARK SHUTTLEWORTH',
        paragraph: ' Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
      }
      return newContent
    },

    3: () => {
      const newContent = {
        ...crewTexts,
        topTitle: 'PILOT ',
        title: 'Victor Glover',
        paragraph: ' Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '
      }
      return newContent
    },
    4: () => {
      const newContent = {
        ...crewTexts,
        topTitle: 'Flight Engineer ',
        title: 'Anousheh Ansari',
        paragraph: ' Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  '
      }
      return newContent
    }
  }

  const observer = new MutationObserver((mutaciones) => {
    mutaciones.forEach((mutacion) => {
      const data = mutacion.target.dataset.index
      const imageIndex = !data ? 1 : data

      const TEXT = CHANGE_TEXT[imageIndex]
      const { topTitle, title, paragraph } = TEXT()

      topTitleElement.textContent = topTitle
      titleElement.textContent = title
      paragraphElement.textContent = paragraph

      animationShowContent([
        topTitleElement,
        titleElement,
        paragraphElement
      ])
      animationChangeImage([image])
    })
  })

  observer.observe(image, {
    attributes: true,
    attributeFilter: ['data-index']
  })
}
