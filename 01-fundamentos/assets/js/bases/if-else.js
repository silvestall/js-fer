// let a = 1

// if (a >= 10) {
//   console.log('a es >= a 10')
// } else {
//   console.log('a es menor a 10')
// }

// console.log('fin de programa')


// const hoy = new Date()
// let dia = hoy.getDay() // 0: domingo, 1: lunes...

// console.log({dia})


// if (dia === 1) {
//   console.log('lunes')

// } else if (dia === 2) {
  
//   console.log('martes')

//   // if (dia === 2) {
//   //   console.log('martes')

//   // } else {
//   //   console.log('no es lunes ni martes')
//   // }
// } else if (dia === 3) {
//   console.log('Miercoles')

// } else {
//   console.log('No es lunes, martes, ni miercoles')
// }



// determinar el dia sin utilizar if, ni else if, ni switch
let dia = new Date().getDay()
// dia = 90

const dias = {
  1: () => 'lunes - 1',
  2: () => 'martes - 2',
  3: () => 'miercoles - 3',
  4: () => 'jueves - 4',
  5: () => 'viernes - 5',
  6: () => 'sabado - 6',
  0: () => 'domingo - 0',
}

const diasArr = [
  () => 'domingo - 0',
  () => 'lunes - 1',
  () => 'martes - 2',
  () => 'miercoles - 3',
  () => 'jueves - 4',
  () => 'viernes - 5',
  () => 'sabado - 6',
]

console.log(diasArr[dia]() || 'El día no es válido')