import { prefillTodoForm } from './forms.js';
import { saveTodoList } from './save-data.js';
import { populateList } from './populate-list.js';


function createEditButton(index) {
  const button = document.createElement('button');
  const i = index;

  button.classList.add('button', 'small-button', 'todo-edit-button');
  button.textContent = 'edit';

  button.addEventListener('click', () => {
    const projectForm = document.querySelector('.project-form');
    const todoForm = document.querySelector('.todo-form');
    const createButton = document.querySelector('.create-todo-button');
    const changeButton = document.querySelector('.change-todo-button');

    projectForm.classList.add('hidden');
    createButton.classList.add('hidden');
    changeButton.classList.remove('hidden');

    prefillTodoForm(data.todos[data.current][i]);
    todoForm.classList.remove('hidden');
  });

  return button;
}


function createDeleteButton(index) {
  const button = document.createElement('button');
  const i = index;

  button.classList.add('button', 'small-button', 'todo-delete-button');
  button.textContent = 'delete';

  button.addEventListener('click', () => {
    data.todos[data.current].splice(i, 1);
    saveTodoList();
    populateList();
  });

  return button;
}


export { createEditButton, createDeleteButton };
