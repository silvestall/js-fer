/**
 * 
 * @param {HTMLDivElement} elementHtml
 */
export const environmenComponent = (elementHtml) => {

  console.log(import.meta.env)

  const html = `
    DEV: ${ import.meta.env.DEV } <br>
    PROD: ${ import.meta.env.PROD } <br>
    API_KEY: ${ import.meta.env.VITE_API_KEY } <br>
    URL: ${ import.meta.env.VITE_BASE_URL } <br>
  `

  elementHtml.innerHTML = html
}