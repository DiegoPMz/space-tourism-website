import { Error404 } from './pages/404/Error404'
import { Crew } from './pages/crew/Crew'
import { Destination } from './pages/destination/Destination'
import { Home } from './pages/home/Home'
import { Technology } from './pages/technology/Technology'

export const app = () => {
  const root = document.querySelector('#root')
  let intervalValues

  const router = () => {
    root.innerHTML = ''

    const LOCATIONS_URL = {
      '': () => {
        root.appendChild(Home())
      },

      '#destination': () => {
        root.appendChild(Destination())
      },

      '#technology': () => {
        root.appendChild(Technology())
      },

      '#crew': () => {
        const { crew, crewInterval } = Crew()

        root.appendChild(crew)
        intervalValues = crewInterval
      },
    }
    const URL = LOCATIONS_URL[location.hash]

    if (!URL) {
      root.appendChild(Error404())
      return
    }

    URL()

    if (intervalValues && location.hash !== '#crew') {
      clearInterval(intervalValues)
      intervalValues = null
    }
  }

  window.addEventListener('DOMContentLoaded', router)
  window.addEventListener('hashchange', router)
}
