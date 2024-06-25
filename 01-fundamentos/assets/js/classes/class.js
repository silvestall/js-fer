class Persona {
  
  static _conteo = 0

  static get getConteo() {
    return `${Persona._conteo} INSTANCIAS`
  }

  static mensaje() {
    console.log( this.nombre )
    console.log('hola, soy un metodo estatico')
  }

  // nombre = ''
  // codigo = ''
  // frase = ''
  comida = ''

  constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
    if (!nombre) throw Error('El nombre es necesario')

    this.codigo = codigo
    this.nombre = nombre
    this.frase = frase

    Persona._conteo++
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase()
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`
  }

  quienSoy() {
    console.log(`soy ${this.nombre} y mi codigo es ${this.codigo}`)
  }

  miFrase() {
    this.quienSoy()
    console.log(`${this.codigo}, mi frase es ${this.frase}`)
  }
}

const Gal = new Persona('Gal', '123', 'hola, soy goku')
const Angelina = new Persona('Gal', '123', 'hola, soy goku')
// const Angelina = new Persona('Angelina', '456', 'hola, soy vegeta')
// console.log(Gal)
// console.log(Angelina)

// Gal.miFrase()
// Angelina.quienSoy()

// Gal.miFrase()


// Gal.setComidaFavorita = 'Hongos'
// Gal.nemesis = 'Diablillo'
// console.log(Gal.getComidaFavorita)


// Persona._conteo = 90000
// console.log(`Conteo estatico ${ Persona._conteo }`)
// console.log(Persona.getConteo)
// Persona.mensaje()


// Persona.propiedadExterna = 'hola mundo'
// console.log(Persona.propiedadExterna)
// console.log(Persona)