const regresaTrue = () => {
  console.log('regresa true')

  return true
}

const regresaFalse = () => {
  console.log('regresa false')

  return false
}

// console.warn('not o negacion')
// console.log(true)
// console.log(!true)
// console.log(!false)

// console.log(!regresaFalse())



// console.warn('and')
// console.log(true && !false)

// console.log('================')
// console.log(regresaFalse() && regresaTrue())
// console.log(regresaTrue() && regresaFalse())



// console.warn('OR')
// console.log(true || false)
// console.log(false || false)
// console.log(regresaTrue() || regresaFalse())
// console.log(true || true || true || false)



console.warn('ASIGANCIONES')
const soyUndefined = undefined
const soyNull = null
const soyFalse = false

const a1 = false && 'hola mundo' && 900
const a2 = 'hola' && 'mundo' && soyFalse && true
const a3 = soyFalse || 'ya no soy false'
const a4 = soyFalse || soyUndefined || soyNull || 'ya no soy false' || true
const a5 = soyFalse || soyUndefined || regresaTrue() || 'ya no soy false' || true

console.log({a1, a2, a3, a4})