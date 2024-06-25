const personaje = {
  nombre: 'Tony',
  codeName: 'Ironman',
  vivo: false,
  edad: 33,
  coords: {
    lat: 22.456,
    lng: -229.344
  },
  trajes: ['traje1', 'traje2', 'traje3'],
  direccion: {
    zip: '1010, 2020',
    ubicacion: 'california, malibu'
  },
  'ultima pelicula': 'infinity war'
}

// console.log(personaje)
// console.log(personaje.nombre)
// console.log(personaje['trajes'])
// console.log(personaje['coords']['lat'])

// console.log('# de trajes', personaje.trajes.length)
// console.log('ultimo traje', personaje.trajes[personaje.trajes.length -1])

// const x = 'vivo'
// console.log('Vivo', personaje[x])

// console.log('Ultima pelicula', personaje['ultima pelicula'])



// mas detalles
delete personaje.edad
// console.log(personaje)

personaje.casado = true
// personaje = []

const entriesPares = Object.entries(personaje)

Object.freeze(personaje)
personaje.direccion.ubicacion = 'Canada'

const propiedades = Object.getOwnPropertyNames(personaje)
const valores = Object.values(personaje)
console.log(propiedades)
console.log(valores)