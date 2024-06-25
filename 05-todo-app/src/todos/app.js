import html from './app.html?raw'
import todoStore, { Filters } from '../store/todo'
import { renderTodo, renderPending } from './use-cases'

/**
 * 
 * @param {string} elementId 
 */

const ElementIds = {
  TodoList: '.todo-list', // hace referencia al class del html
  NewTodoInput: '#new-todo-input',
  ClearCompleted: '.clear-completed',
  TodoFilters: '.filtro',
  PendingCountLabel: '#pending-count',
}

export const App = (elementId) => {

  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter())
    renderTodo(ElementIds.TodoList, todos)
    updatePendingCount()
  }

  const updatePendingCount = () => {
    renderPending(ElementIds.PendingCountLabel)
  }

  // se monta cuando la funcion App() se llama
  (() => {
    // const app = document.createElement('div')
    // app.innerHTML = html

    document.querySelector(elementId).innerHTML = html

    displayTodos()
  })()

  // referecias HTML
  const newDescriptionInput = document.querySelector(ElementIds.NewTodoInput)
  const todoListUL = document.querySelector(ElementIds.TodoList)
  const clearCompletedButton = document.querySelector(ElementIds.ClearCompleted)
  const filtersLI = document.querySelectorAll(ElementIds.TodoFilters)

  // listeners
  newDescriptionInput.addEventListener('keyup', (event) => {

    if (event.keyCode !== 13) return
    if (event.target.value.trim().length < 2) return

    todoStore.addTodo(event.target.value)
    displayTodos()
    event.target.value = ''
  })

  todoListUL.addEventListener('click', (event) => {
    const father = event.target.closest('[data-id]')
    todoStore.toggleTodo(father.getAttribute('data-id'))
    displayTodos()
  })

  todoListUL.addEventListener('click', (event) => {

    const isDestroyElement = event.target.className === 'destroy'
    const father = event.target.closest('[data-id]')

    if (!father || !isDestroyElement) return

    todoStore.deleteTodo(father.getAttribute('data-id'))
    displayTodos()
  })

  clearCompletedButton.addEventListener('click', () => {

    todoStore.deleteCompleted()
    displayTodos()
  })

  filtersLI.forEach(elem => {

    elem.addEventListener('click', (event) => {

      filtersLI.forEach(a => a.classList.remove('selected'))

      event.target.classList.add('selected')

      switch (event.target.text) {
        case 'Todos':
          todoStore.setFilters(Filters.All)
          break
        case 'Pendientes':
          todoStore.setFilters(Filters.Pending)
          break
        case 'Completados':
          todoStore.setFilters(Filters.Completed)
          break
      }
      
      displayTodos()
    })

  })
}