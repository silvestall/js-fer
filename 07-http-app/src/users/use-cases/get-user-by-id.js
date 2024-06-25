import { localhostUserToModel } from '../mappers/localhost-user'
import { User } from '../models/user'

/**
 * 
 * @param {string|number} id
 * @returns {Promise<User>}
 */
export const getUserById = async (id) => {

  const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`
  const res = await fetch(url)
  const data = await res.json()
  const user = localhostUserToModel(data)
  
  return user
}