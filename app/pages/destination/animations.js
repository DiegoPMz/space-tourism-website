import anime from 'animejs'

export const animationRotate = (elements) => {
  anime({
    targets: elements,
    rotate: {
      value: [360],
      duration: 40000,
      easing: 'linear'
    },
    opacity: {
      value: [0, 1],
      easing: 'easeOutCubic',
      duration: '400'
    },
    loop: true
  })
}

export const animationShowContent = (elements) => {
  anime({
    targets: elements,
    translateY: ['20px', '0px'],
    opacity: [0, 1],
    easing: 'easeOutCubic',
    duration: '400'
  })
}

export const animationTitles = (elements) => {
  anime({
    targets: elements,
    translateX: ['20px', '0px'],
    opacity: [0, 1],
    easing: 'easeOutCubic',
    duration: '600'
  })
}
