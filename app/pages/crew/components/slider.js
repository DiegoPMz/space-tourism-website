export const Slider = (buttons) => {
  if (!buttons) return

  const changeImage = (e) => {
    const { index } = e.target.dataset

    const image = document.querySelector('.crew__main-image')
    image.setAttribute('data-index', index)

    const indexImage = {
      1: () => {
        image.classList = 'crew__main-image crew__main-image--one'
      },

      2: () => {
        image.classList = 'crew__main-image crew__main-image--two'
      },

      3: () => {
        image.classList = 'crew__main-image crew__main-image--three'
      },

      4: () => {
        image.classList = 'crew__main-image crew__main-image--four'
      }
    }

    const changeImg = indexImage[index]
    changeImg()
  }

  const buttonActive = (e) => {
    const btn = e.target
    const elements = [...buttons]

    if (!btn.classList.contains('crew__main-slider-circle--active')) {
      const elementActive = elements.find(el => el.classList.contains('crew__main-slider-circle--active'))
      elementActive && elementActive.classList.remove('crew__main-slider-circle--active')

      btn.classList.add('crew__main-slider-circle--active')
    }
  }

  buttons.forEach((btn, index) => {
    btn.setAttribute('data-index', `${index + 1}`)

    btn.addEventListener('click', (e) => changeImage(e))
    btn.addEventListener('click', (e) => buttonActive(e))
  })

  const crewInterval = setInterval(() => automaticSlider(buttons), 10000)

  return { crewInterval }
}

const automaticSlider = (buttons) => {
  if (!buttons) return
  const image = document.querySelector('.crew__main-image')

  const value = parseInt(image.dataset.index) + 1
  const valueRes = value
  image.dataset.index = valueRes > 4 ? 1 : valueRes

  const indexImage = {
    1: () => {
      image.classList = 'crew__main-image crew__main-image--one'
    },

    2: () => {
      image.classList = 'crew__main-image crew__main-image--two'
    },

    3: () => {
      image.classList = 'crew__main-image crew__main-image--three'
    },

    4: () => {
      image.classList = 'crew__main-image crew__main-image--four'
    }

  }

  const changeImg = indexImage[image.dataset.index]
  changeImg()

  const changeButtonActive = (buttons) => {
    const elements = [...buttons]
    const elementActive = elements.find(el => el.classList.contains('crew__main-slider-circle--active'))

    buttons.forEach(btn => {
      if (btn.dataset.index === image.dataset.index) {
        elementActive && elementActive.classList.remove('crew__main-slider-circle--active')

        btn.classList.add('crew__main-slider-circle--active')
      }
    })
  }
  changeButtonActive(buttons)
}
