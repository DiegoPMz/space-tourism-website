import { animationChangeImage } from './animations'

export const Slider = (buttons) => {
  if (!buttons) return

  const changeImage = (e) => {
    const { index } = e.target.dataset

    const image = document.querySelector('.main__img')
    image.setAttribute('data-index', index)

    const indexImage = {
      1: () => {
        image.classList = 'main__img main__img--one'
      },

      2: () => {
        image.classList = 'main__img main__img--two'
      },

      3: () => {
        image.classList = 'main__img main__img--three'
      }
    }

    const changeImg = indexImage[index]
    changeImg()

    animationChangeImage([image])
  }

  const buttonActive = (e) => {
    const btn = e.target
    const elements = [...buttons]

    if (!btn.classList.contains('main__circles--active')) {
      const elementActive = elements.find(el => el.classList.contains('main__circles--active'))
      elementActive && elementActive.classList.remove('main__circles--active')

      btn.classList.add('main__circles--active')
    }
  }

  buttons.forEach((btn, index) => {
    btn.setAttribute('data-index', `${index + 1}`)

    btn.addEventListener('click', (e) => changeImage(e))
    btn.addEventListener('click', (e) => buttonActive(e))
  })
}
