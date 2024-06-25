
// function crearPersona(nombre, apellido) {
//   return {nombre, apellido}
// }

// const crearPersona = (nombre, apellido) => ({nombre, apellido})

// const persona = crearPersona('Morgan', 'Freeman')
// console.log(persona)



// function imprimeArgumentos() {
//   console.log(arguments)
// }

// const imprimeArgumentos2 = (edad, ...args) => {
//   // console.log({ edad, vivo, args })
//   return args
// }

// const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'hola', 'que tal', 123)
// console.log({casado, vivo, nombre, saludo})



// const crearPersona = (nombre, apellido) => ({nombre, apellido})

// const { apellido: nuevoApellido } = crearPersona('Morgan', 'Freeman')
// console.log(nuevoApellido)


const personaje = {
  nombre: 'Tony',
  codeName: 'Ironman',
  vivo: false,
  edad: 33,
  trajes: ['traje1', 'traje2', 'traje3'],
}

const imprimePropiedades = ({nombre, codeName, vivo, edad = 90, trajes}) => {
  console.log({nombre, codeName, vivo, edad, trajes})
}

imprimePropiedades(personaje)