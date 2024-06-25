/**
 * 2C = two of clubs - treboles
 * 2D = two of diamonds - diamantes
 * 2H = two of hearts - corazones
 * 2S = two of spades - espadas
 */

const miModulo = (() => {
  'use strict'

  let deck = []
  const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K']

  let puntosJugadores = []

  // referenias HTML
  const btnNuevo = document.querySelector('#btnNuevo'),
    btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener')

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
    puntosHTML = document.querySelectorAll('small')

  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck()
    puntosJugadores = []

    puntosHTML.forEach(elem => elem.innerText = 0)
    divCartasJugadores.forEach(elem => elem.innerHTML = '')

    btnPedir.disabled = false
    btnDetener.disabled = false

    // crea un arreglo con la cantidad de jugadores. ejm: [0, 0], jugador - computadora
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0)
    }
  }

  // crea un nuevo deck
  const crearDeck = () => {
    deck = []

    for (let i = 2; i <= 10; i++) {

      for (let tipo of tipos) {
        deck.push(i + tipo)
      }
    }

    for (let tipo of tipos) {
      for (let esp of especiales) {
        deck.push(esp + tipo)
      }
    }

    return _.shuffle(deck)
  }

  // permite tomar una carta
  const pedirCarta = () => {

    if (deck.length === 0) throw 'No hay cartas en el deck'

    return deck.pop()
  }

  // determinar el valor de la carta
  const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1)

    return isNaN(valor)
      ? (valor === 'A') ? 11 : 10
      : valor * 1
  }

  // turno 0: primer jugador, 1: segundo jugador... ultimo: computadora
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
    puntosHTML[turno].innerText = puntosJugadores[turno]

    return puntosJugadores[turno]
  }

  // crea la imagen de la carta
  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement('img')
    imgCarta.classList.add('carta')
    imgCarta.src = `./assets/cartas/${carta}.png`

    divCartasJugadores[turno].append(imgCarta)
  }

  const determinarGanador = () => {
    const [puntosJugador, puntosComputadora] = puntosJugadores
    
    setTimeout(() => {

      puntosJugador > 21 && puntosComputadora > 21
        ? alert('AMBOS HAN PERDIDO!!!')
        : puntosJugador > 21
          ? alert('EL JUGADOR HA PERDIDO!!!')
          : puntosComputadora > 21
            ? alert('LA COMPUTADORA HA PERDIDO!!!')
            : puntosComputadora === puntosJugador
              ? alert('ES UN EMPATE!!!')
              : puntosJugador > puntosComputadora
                ? alert('EL JUGADOR HA GANADO!!!')
                : alert('LA COMPUTADORA HA GANADO!!!')

    }, 100)
  }

  // turno de la computadora
  const turnoComputadora = (puntosJugador) => {
    let puntosComputadora = 0

    do {
      const carta = pedirCarta()
      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1)

      // se crea la carta
      crearCarta(carta, puntosJugadores.length - 1)

      if (puntosComputadora === 21) break

    } while ((puntosJugador <= 21) && (puntosComputadora <= puntosJugador))

      determinarGanador()
  }

  // eventos
  btnPedir.addEventListener('click', () => {

    const carta = pedirCarta()
    const puntosJugador = acumularPuntos(carta, 0)

    // se crea la carta
    crearCarta(carta, 0)

    // determinar si el jugador gano o perdio
    if (puntosJugador > 21) {
      btnPedir.disabled = true
      btnDetener.disabled = true

      turnoComputadora(puntosJugador)

    } else if (puntosJugador === 21) {
      btnPedir.disabled = true
      btnDetener.disabled = true

      turnoComputadora(puntosJugador)
    }
  })

  btnDetener.addEventListener('click', () => {

    btnPedir.disabled = true
    btnDetener.disabled = true

    turnoComputadora(puntosJugadores[0])
  })

  btnNuevo.addEventListener('click', () => {

    inicializarJuego()
  })

  return {
    nuevoJuego: inicializarJuego
  }

})()