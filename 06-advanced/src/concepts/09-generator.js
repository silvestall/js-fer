/**
 * 
 * @param {HTMLDivElement} elementHtml
 */

export const generatorFunctionComponent = (elementHtml) => {
  
  // const myGenerator = myFirstGeneratorFunction()

  // console.log( myGenerator.next() )
  // console.log( myGenerator.next() )
  // console.log( myGenerator.next() )
  // console.log( myGenerator.next() )
  // console.log( myGenerator.next() )
  // console.log( myGenerator.next() )


  const genId = idGenerator()
  
  const button = document.createElement('button')
  button.innerText = 'Click here'
  elementHtml.append(button)

  const renderButton = () => {

    const { value } = genId.next()
    button.innerText = `Click ${value}`
  }

  button.addEventListener('click', renderButton)
}

// function* myFirstGeneratorFunction() {
//   yield 'primer valor'
//   yield 'segundo valor'
//   yield 'tercero valor'
//   yield 'cuarto valor'
  
//   return 'no hay valores'
// }


function* idGenerator() {
  let currentId = 0

  while(true) {
    yield ++currentId
  }
}