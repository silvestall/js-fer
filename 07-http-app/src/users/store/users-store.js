import { loadUsersByPage } from '../use-cases/load-users-by-page'

const state = {
  users: [],
  currentPage: 0
}

const loadNextPage = async () => {
  const nextPage = state.currentPage + 1

  const { users, pages } = await loadUsersByPage(nextPage)

  if (users.length === 0) return
  if (nextPage > pages) return

  state.currentPage += 1
  state.users = users
}

const loadPreviousPage = async () => {
  const previousPage = state.currentPage - 1

  if (previousPage === 0) return
  const { users } = await loadUsersByPage(previousPage)

  if (users.length === 0) return

  state.currentPage -= 1
  state.users = users
}

const reloadPage = async () => {
  const nextPage = state.currentPage

  const { users, pages } = await loadUsersByPage(nextPage)

  if (users.length === 0) {
    await loadPreviousPage()

    return
  }
  if (nextPage > pages) return

  // state.currentPage += 1
  state.users = users
}

/**
 * 
 * @param {User} updatedUser
 */
const onUserChanged = (updatedUser) => {
  let wasFound = false

  state.users = state.users.map(user => {

    if (user.id === updatedUser.id) {
      wasFound = true
      return updatedUser
    }

    return user
  })

  if (state.users.length < 10 && !wasFound) {
    state.users.push(updatedUser)
  }
}

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  /**
   * 
   * @returns {Array<User>}
   */
  getUsers: () => [...state.users],

  /**
   * 
   * @returns {number}
   */
  getCurrentPage: () => state.currentPage
}