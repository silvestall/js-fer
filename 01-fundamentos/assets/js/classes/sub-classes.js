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

class Heroe extends Persona {

  clan = 'sin clan'

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase)
    
    this.clan = 'Los Magicos'
    
  }

  quienSoy() {
    console.log(`Soy ${this.nombre}`)
    super.quienSoy()
  }
}

const Gal = new Heroe()
console.log(Gal)
Gal.quienSoy()