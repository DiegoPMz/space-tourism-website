import './error404.css'

export const Error404 = () => {
  const Error = document.createElement('section')
  Error.classList.add('error__general')
  Error.innerHTML = `
 
  <div class="error">
    <div class="error__moon">
      <div class="glitch-wrapper">
        <h3 class="glitch" data-glitch="404">404</h3>
      </div>

      <div class="moon__crater moon__crater1"></div>
      <div class="moon__crater moon__crater2"></div>
      <div class="moon__crater moon__crater3"></div>
    </div>

    <div class="error__content">
      <p class="error__content-paragraph">
        <span class="content-paragraph-span">Hmmm...</span>

        It looks like one of the developers fell asleep
      </p>
      <a href="#" class="error__content-link">HOME</a>
    </div>
  </div>

  `

  return Error
}
