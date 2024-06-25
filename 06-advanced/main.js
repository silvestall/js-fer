import { environmenComponent } from './src/concepts/01-environments'
import { callbacksComponent } from './src/concepts/02-callbacks'
import { promisesComponent } from './src/concepts/03-promises'
import { promiseRaseComponent } from './src/concepts/04-promise-race'
import { asyncComponent } from './src/concepts/05-async'
import { asyncAwaitComponent } from './src/concepts/07-async-await'
import { forAwaitComponent } from './src/concepts/08-for-await'
import { generatorFunctionComponent } from './src/concepts/09-generator'
import { generatorAsyncComponenet } from './src/concepts/10-generator-async'
import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
  </div>
`

const element = document.querySelector('.card')

// environmenComponent(element)
// callbacksComponent(element)
// promisesComponent(element)
// promiseRaseComponent(element)
// asyncComponent(element)
// asyncAwaitComponent(element)
// asyncAwaitComponent(element)
// forAwaitComponent(element)
// generatorFunctionComponent(element)
generatorAsyncComponenet(element)