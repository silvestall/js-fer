const superHeroes = [
  { id: 1, name: 'Batman'},
  { id: 2, name: 'Superman'},
  { id: 3, name: 'Antman'},
  { id: 4, name: 'La mujer maravilla'},
]

// const superHeroesCopy = [...superHeroes]
// superHeroesCopy[0].name = 'Zane'


const superHeroesCopy = structuredClone(superHeroes)
superHeroesCopy[0].name = 'Zane'


console.table(superHeroes)
console.table(superHeroesCopy)