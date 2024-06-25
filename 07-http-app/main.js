import './style.css'
// import { BreakingBad } from './src/breakingbad/breakingbad-app.js'
import { UsersApp } from './src/users/users-app.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>BreakingBadApp</h1>
    <div class="card"></div>
  </div>
`

const element = document.querySelector('.card')
// BreakingBad(elem)

UsersApp(element)