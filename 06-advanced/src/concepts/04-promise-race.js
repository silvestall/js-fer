/**
 * 
 * @param {HTMLDivElement} elementHtml
 */
export const promiseRaseComponent = (elementHtml) => {

  elementHtml.innerHTML = 'Loading...'

  const renderValue = (name) => {
    elementHtml.innerHTML = name
  }

  Promise.race([
    slowPromise(),
    mediumPromise(),
    fastpromise(),
  ])
    .then(string => renderValue(string))
}

const slowPromise = () => new Promise(resolve => {

  setTimeout(() => {
    resolve('slowpromise')
  }, 1000)
})

const mediumPromise = () => new Promise(resolve => {

  setTimeout(() => {
    resolve('mediumpromise')
  }, 2000)
})

const fastpromise = () => new Promise(resolve => {

  setTimeout(() => {
    resolve('fastpromise')
  }, 2500)
})