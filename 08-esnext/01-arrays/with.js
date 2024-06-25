const state = [
  { id: 1, name: 'Batman'},
  { id: 2, name: 'Superman'},
  { id: 3, name: 'Antman'},
  { id: 4, name: 'La mujer maravilla'},
]

const index = 1
const newName = 'Fabri'

// const newState = state.map((hero, i) => {

//   if (i === index) hero.name = newName

//   return hero
// })

const newState = state.with(index, {
  ...state.at(index),
  name: newName
})

state[0].name = 'Volcan'

console.table(newState)
console.log('El ultimo: ', state.at(3))