import { animationShowContent } from './animations'

export const changeTextContet = (Technology) => {
  const titleContainer = Technology.querySelector('.main__title')
  const titleElement = Technology.querySelector('.main__title-h')
  const paragraphElement = Technology.querySelector('.main__paragraph')
  const image = Technology.querySelector('.main__img')

  const technologyTexts = {
    title: '',
    paragraph: ''
  }

  const CHANGE_TEXT = {
    1: () => {
      const newContent = {
        ...technologyTexts,
        title: 'LAUNCH VEHICLE',
        paragraph: ` A launch vehicle or carrier rocket is a rocket-propelled vehicle
        used to carry a payload from Earth's surface to space, usually
        to Earth orbit or beyond. Our WEB-X carrier rocket is the most
        powerful in operation. Standing 150 metres tall, it's quite an
        awe-inspiring sight on the launch pad!`
      }
      return newContent
    },

    2: () => {
      const newContent = {
        ...technologyTexts,
        title: 'SPACEPORT',
        paragraph: ' A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
      }
      return newContent
    },

    3: () => {
      const newContent = {
        ...technologyTexts,
        title: 'SPACE CAPSULE',
        paragraph: ' A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.'
      }
      return newContent
    }
  }

  const observer = new MutationObserver((mutaciones) => {
    mutaciones.forEach((mutacion) => {
      const data = mutacion.target.dataset.index
      const imageIndex = !data ? 1 : data

      const TEXT = CHANGE_TEXT[imageIndex]
      const { title, paragraph } = TEXT()

      titleElement.textContent = title
      paragraphElement.textContent = paragraph

      animationShowContent([paragraphElement, titleContainer])
    })
  })

  observer.observe(image, {
    attributes: true,
    attributeFilter: ['data-index']
  })
}
