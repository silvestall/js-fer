import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} elementHtml
 */
export const asyncAwaitComponent = async(elementHtml) => {
  
  const id1 = '5d86371f2343e37870b91ef1'
  const id2 = '5d86371f25a058e5b1c8a65e'

  try {
    const {name: name1} =  await findHeroe(id1)
    const {name: name2} = await findHeroe(id2)
  
    elementHtml.innerHTML = `${name1}, ${name2}`

  } catch (err) {
    elementHtml.innerHTML = err
  }
}

const findHeroe = async(id) => {
  const heroe = heroes.find(hero => hero.id === id)

  if (!heroe) throw 'Hero not found'

  return heroe
}