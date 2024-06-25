import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} elementHtml
 */
export const asyncComponent = (elementHtml) => {

  const id1 = '5d86371f1efebc31def272e2'
  // console.log('inicio de componente')
  
  findHeroes(id1)
    .then(name => elementHtml.innerHTML = name)
    .catch(err => elementHtml.innerHTML = err)

  // console.log('fin de componente')
}

/**
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
const findHeroes = async (id) => {
  const heroe = heroes.find(hero => hero.id === id)

  if (!heroe) throw 'hOLAAAA'

  return heroe.name
}