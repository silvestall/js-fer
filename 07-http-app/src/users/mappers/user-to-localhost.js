import { User } from '../models/user'
import usersStore from '../store/users-store'

/**
 * 
 * @param {User} user 
 * @returns 
 */
export const userModelToLocalhost = (user) => {

  const {
    id,
    isActive,
    balance,
    firstName,
    lastName,
    avatar,
    gender
  } = user

  return {
    id,
    isActive,
    balance,
    first_name: firstName,
    last_name: lastName,
    avatar,
    gender
  }
}