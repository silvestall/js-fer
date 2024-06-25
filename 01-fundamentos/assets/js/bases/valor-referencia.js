// let a = 10
// let b = a
// a = 30

// console.log({ a, b })


// let morgan = { nombre: 'Morgan' }
// let ana = { ...morgan }
// ana.nombre = 'Ana'

// console.log({morgan, ana})


// const cambiaNombre = ({...persona}) => {
//   persona.nombre = 'Tony'

//   return persona
// }

// let peter = { nombre: 'peter' }
// let tony = cambiaNombre(peter)

// console.log({peter, tony})


// arreglos
const frutas = ['manzana', 'pera', 'uva']

console.time('slice')
const otrasFrutas = frutas.slice()
console.timeEnd('slice')

console.time('spread')
const otrasFrutas2 = [...frutas]
console.timeEnd('spread')


otrasFrutas.push('limon')

console.table({frutas, otrasFrutas})