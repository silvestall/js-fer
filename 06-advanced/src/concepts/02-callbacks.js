import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} elementHtml
 */
export const callbacksComponent = (elementHtml) => {
  
  const id1 = '5d86371f2343e37870b91ef1'
  const id2 = '5d86371f9f80b591f499df32'
  
  findHeroe(id1, (error, hero1) => {

    if (error) {
      elementHtml.innerHTML = error
      return
    }

    // elementHtml.innerHTML = hero?.name || 'No hay heroe'
    // elementHtml.innerHTML = hero.name

    findHeroe(id2, (error, hero2) => {
      if (error) {
        elementHtml.innerHTML = error
        return
      }

      elementHtml.innerHTML = `${hero1.name} - ${hero2.name}`
    })
  })
}

/**
 * 
 * @param {string} id 
 * @param {(error: string|null, hero: Object) => void} callback 
 */
const findHeroe = (id, callback) => { 

  const hero = heroes.find(hero => hero.id === id)

  if (!hero) {
    callback(`Hero with id ${id} not found`)
    return // undefined
  }

  callback(null, hero)
}