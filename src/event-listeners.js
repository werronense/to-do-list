import { toggleProjectForm, toggleTodoForm } from './toggle.js';

function setEventListeners() {
  const projectButton = document.querySelector('.project-button');
  const todoButton = document.querySelector('.todo-button');

  projectButton.addEventListener('click', toggleProjectForm);
  todoButton.addEventListener('click', toggleTodoForm);

  const projectSubmit = document.querySelector(
    '.project-form input[type="submit"]'
  );
  const todoSubmit = document.querySelector(
    '.todo-form input[type="submit"]'
  );

  projectSubmit.addEventListener('click', e => {
    e.preventDefault();
    toggleProjectForm();
  });

  todoSubmit.addEventListener('click', e => {
    e.preventDefault();
    toggleTodoForm();
  });
}

export { setEventListeners };
