import { localhostUserToModel } from '../mappers/localhost-user'
import { User } from '../models/user'

/**
 * 
 * @param {number} page 
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async (page = 1) => {

  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`
  const res = await fetch(url)
  const { data, pages } = await res.json()
  const users = data.map(localhostUserToModel)
  
  return { users, pages }
}