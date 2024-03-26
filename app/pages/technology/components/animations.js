import anime from 'animejs'

export const animationShowContent = (elements) => {
  anime({
    targets: elements,
    translateY: ['20px', '0px'],
    opacity: [0, 1],
    easing: 'easeOutCubic',
    duration: '500'
  })
}

export const animationChangeImage = (elements) => {
  anime({
    targets: elements,
    scale: [0.99, 1],
    opacity: [0, 1],
    easing: 'easeOutCubic',
    duration: '500'
  })
}
