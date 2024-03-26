import anime from 'animejs'

export const animationShowMenu = (elements) => {
  anime({
    targets: elements,
    opacity: {
      value: [0, 1],
      easing: 'easeOutCubic',
      duration: '500'
    },
    translateX: {
      value: ['100%', '0'],
      easing: 'easeOutCubic',
      duration: '300'
    }
  })
}

export const animationShowMenuR = (elements) => {
  anime({
    targets: elements,
    opacity: {
      value: [0, 1],
      easing: 'easeOutCubic',
      duration: '500'
    },
    translateX: {
      value: ['0', '100%'],
      easing: 'easeOutCubic',
      duration: '500'
    }
  })
}
