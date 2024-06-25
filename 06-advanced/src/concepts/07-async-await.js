/**
 * 
 * @param {HTMLDivElement} elementHtml
 */
export const asyncAwaitComponent = async(elementHtml) => {
  
  // const value1 = await slowPromise()
  // const value2 = await mediumPromise()
  // const value3 = await fastpromise()

  console.time('hola')

  const [value1, value2, value3] = await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastpromise(),
  ])

  console.timeEnd('hola')

  elementHtml.innerHTML = `
    value1: ${value1} <br>
    value2: ${value2} <br>
    value3: ${value3} <br>
  `
}

const slowPromise = () => new Promise(resolve => {

  setTimeout(() => {
    resolve('slowpromise')
  }, 1000)
})

const mediumPromise = () => new Promise(resolve => {

  setTimeout(() => {
    resolve('mediumpromise')
  }, 1500)
})

const fastpromise = () => new Promise(resolve => {

  setTimeout(() => {
    resolve('fastpromise')
  }, 2000)
})