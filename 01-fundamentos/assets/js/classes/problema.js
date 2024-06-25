const morgan = {
  nombre: 'Morgan',
  edad: 30,
  imprimir() {
    console.log(`Nombre ${this.nombre} - edad: ${this.edad}`)
  }
}

const megan = {
  nombre: 'Megan',
  edad: 30,
  imprimir() {
    console.log(`Nombre ${this.nombre} - edad: ${this.edad}`)
  }
}

function Persona(nombre, edad) {
  this.nombre = nombre
  this.edad = edad

  this.imprimir = function() {
    console.log(`Nombre ${this.nombre} - edad: ${this.edad}`)
  }
}

const Vin = new Persona('Vin', 33)
const Gal = new Persona('Gal', 11)
Vin.imprimir()
Gal.imprimir()