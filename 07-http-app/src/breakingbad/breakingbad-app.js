
/**
 * @returns {Promise<Object>} quote info
 */
const fetchQuote = async () => {
  const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
  const data = await res.json()

  return data[0]
}

/**
 * 
 * @param {HTMLDivElement} elem 
 */
export const BreakingBad = async (elem) => {

  elem.innerText = 'Loading...'

  const quoteLabel = document.createElement('blockquote')
  const authorLabel = document.createElement('h3')
  const nextQuoteButton = document.createElement('button')
  nextQuoteButton.innerText = 'Next quote'

  const renderquote = ({ quote, author }) => {
    quoteLabel.innerText = quote
    authorLabel.innerText = author

    elem.replaceChildren(quoteLabel, authorLabel, nextQuoteButton)
  }

  const data = await fetchQuote()
  renderquote(data)

  nextQuoteButton.addEventListener('click', async() => {
    elem.innerText = 'Loading...'
    
    const data = await fetchQuote()
    renderquote(data)
  })
}