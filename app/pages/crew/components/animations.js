import anime from 'animejs'

export const animationShowContent = (elements) => {
  anime({
    targets: elements,
    translateY: ['50px', '0px'],
    opacity: [0, 1],
    easing: 'easeOutCubic',
    duration: '500'
  })
}

export const animationChangeImage = (elements) => {
  anime({
    targets: elements,
    opacity: {
      value: [0, 1],
      easing: 'easeInOutSine',
      duration: '800'
    },
    scale: {
      value: [0, 1],
      duration: 500,
      easing: 'easeOutCubic'
    }

  })
}
