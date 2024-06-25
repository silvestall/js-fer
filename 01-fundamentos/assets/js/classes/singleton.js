class Singleton {

  static instancia // undefined
  nombre = ''

  constructor(nombre = '') {

    // const a = undefined
    // console.log(a)
    // console.log(!a)
    // console.log(!!a)

    if (!!Singleton.instancia) {
      return Singleton.instancia
    }

    Singleton.instancia = this
    this.nombre = nombre
  }
}

const instancia1 = new Singleton('Charlize')
const instancia2 = new Singleton('theron')

console.log(`nombre en la instancia1 es ${instancia1.nombre}`)
console.log(`nombre en la instancia2 es ${instancia2.nombre}`)