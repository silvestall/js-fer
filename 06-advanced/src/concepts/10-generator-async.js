import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} elementHtml
 */
export const generatorAsyncComponenet = async(elementHtml) => {
  
  const heroGenerator = getHeroGenerator()
  let isFinished = false

  do {
    const { value, done } = await heroGenerator.next()
    isFinished = done

    if (isFinished) break

    elementHtml.innerHTML = value

  } while( !isFinished )
}

async function* getHeroGenerator() {
  
  for (const hero of heroes) {
    await sleep()

    yield hero.name
  }
}

const sleep = () => new Promise(resolve => setTimeout( resolve, 10))