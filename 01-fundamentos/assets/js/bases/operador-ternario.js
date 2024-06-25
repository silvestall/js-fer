// dia de semana, abre a las 11
// fin de semana, abre a las 9

const dia = 1 // 0: domingo
const horaActual = 10

let horaApertura, 
    mensaje // Esta abierto... Esta cerrado, hoy abrimos a las ...

// if (dia === 0 || dia === 6) {
// if ([0,6].includes(dia)) {
//   console.log('find de semana')
//   horaApertura = 9

// } else {
//   console.log('dia de semana')
//   horaApertura = 11
// }

horaApertura = [0,6].includes(dia) ? 9 : 11

// if (horaActual >= horaApertura) {
//   mensaje = 'Esta abierto'
// } else {
//   mensaje = `Esta cerrado. Abrimos a las ${horaApertura}`
// }

mensaje = horaActual >= horaApertura ? 'Esta abierto': `Esta cerrado. Abrimos a las ${horaApertura}`

console.log({horaApertura, mensaje})