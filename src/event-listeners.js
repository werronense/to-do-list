import { toggleProjectForm, toggleTodoForm } from './toggle.js';


function setProjectSubmitEventListener() {
  const projectForm = document.querySelector('.project-form');

  projectForm.addEventListener('submit', e => {
    e.preventDefault();
    toggleProjectForm();
  });
}


function setTodoSubmitEventListener() {
  const todoForm = document.querySelector('.todo-form');

  todoForm.addEventListener('click', e => {
    e.preventDefault();
    toggleTodoForm();
  });
}


function setEventListeners() {
  const projectButton = document.querySelector('.project-button');
  const todoButton = document.querySelector('.todo-button');

  projectButton.addEventListener('click', toggleProjectForm);
  todoButton.addEventListener('click', toggleTodoForm);

  setProjectSubmitEventListener();
  setTodoSubmitEventListener();
}


export { setEventListeners };
