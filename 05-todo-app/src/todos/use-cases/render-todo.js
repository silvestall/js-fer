import { Todo } from '../models/todo'
import { createTodoHtml } from './create-todo-html'

let element

/**
 * 
 * @param {string} elementId es la referencia de una clase
 * @param {Array<Todo>} todo
 */
export const renderTodo = (elementId, todos = []) => {

  if (!element) element = document.querySelector(elementId)
  if (!element) throw new Error(`Element ${elementId} not found`)

  // limpiamos el contenido del elemento
  element.innerHTML = ''

  todos.forEach(todo => {
    element.append( createTodoHtml(todo) )
  })
}