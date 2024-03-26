import anime from 'animejs'

export const animationRotate = (elements) => {
  anime({
    targets: elements,
    rotate: ['0deg', '360deg'],
    easing: 'linear',
    duration: '15000',
    loop: true
  })
}

export const animationShowContent = (elements) => {
  anime({
    targets: elements,
    translateY: ['-60px', '0px'],
    opacity: [0, 1],
    easing: 'easeOutCubic',
    duration: '800'
  })
}
