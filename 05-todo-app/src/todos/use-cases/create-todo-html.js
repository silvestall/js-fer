import { Todo } from '../models/todo'

/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHtml = (todo) => {
  if (!todo) throw new Error('A todo object is required')

  const { description, done, id } = todo

  const html = `
    <div class="view">
      <input class="toggle" type="checkbox" ${done ? 'checked' : ''}>
      <label>${description}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  `

  const li = document.createElement('li')
  li.innerHTML = html
  li.setAttribute('data-id', id)

  if (done) li.classList.add('completed')

  return li
}