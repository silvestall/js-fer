import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} elementHtml
 */
export const promisesComponent = (elementHtml) => {

  const renderHero = (hero) => {
    elementHtml.innerHTML = hero.name
  }

  const renderError = (error) => {
    elementHtml.innerHTML = `
      <h3>${error}</h3>
    `
  }

  const renderTwoHeroes = (heroe1, heroe2) => {
    elementHtml.innerHTML = `
      <h3>${heroe1.name}</h3>
      <h3>${heroe2.name}</h3>
    `
  }

  const id1 = '5d86371f233c9f2425f16916'
  const id2 = '5d86371f97c29d020f1e1f6d'

  // forma 3
  Promise.all([
    findHeroe(id1),
    findHeroe(id2),
  ])
  .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
  .catch(renderError)


  // forma 2
  // let hero1

  // findHeroe(id1)
  //   .then(hero => {
  //     hero1 = hero

  //     return findHeroe(id2)
  //   }).then(hero2 => {
  //     renderTwoHeroes(hero1, hero2)
  //   })
  //   .catch(renderError)

  // forma 1
  // findHeroe(id1)
  //   .then( hero1 => {

  //     findHeroe(id2)
  //       .then(hero2 => renderTwoHeroes(hero1, hero2))
  //       .catch(renderError)
  //   })
  //   .catch(renderError)
}

/**
 * 
 * @param {string} id 
 * @returns {Promise<Object>}
 */
const findHeroe = (id) => {

  return new Promise((resolve, reject) => {
    const hero = heroes.find(hero => hero.id === id)

    if (hero) {
      resolve(hero)
      return

    } else {
      reject(`Hero with id ${id} not found`)
    }
  })
}