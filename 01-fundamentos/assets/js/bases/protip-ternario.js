const elMayor = (a, b) => (a > b) ? a : b

const tieneMembresia = (miembro) => (miembro) ? '2$' : '4$'

// console.log(elMayor(3, 2))
// console.log(tieneMembresia(true))



const amigo = false
const amigoArr = [
  'peter',
  'tony',
  amigo ? 'thor': 'loki',
  (() => 'nick fury')(),
  elMayor(11, 23)
]

// console.log(amigoArr)



const nota = 99 // A+ A B+ B
const grado = nota >= 95 ? 'A+' : 
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'D'

console.log({nota, grado})