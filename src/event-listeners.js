import { createOption } from './project-selector.js';
import { saveProject } from './save-data.js';
import { toggleProjectForm, toggleTodoForm } from './toggle.js';


function setProjectSubmitEventListener() {
  const projectForm = document.querySelector('.project-form');
  const projectSelector = document.querySelector('.project-selector');
  projectSelector.value = localStorage.getItem('current') ||
    data.current;

  projectForm.addEventListener('submit', e => {
    e.preventDefault();
    saveProject(e.target['project-name'].value);
    projectSelector.appendChild(createOption(e.target['project-name'].value));
    projectSelector.value = e.target['project-name'].value;
    projectForm.reset();
    toggleProjectForm();
  });
}


function setTodoSubmitEventListener() {
  const todoForm = document.querySelector('.todo-form');

  todoForm.addEventListener('click', e => {
    e.preventDefault();

    // TODO: create a todo object
    // TODO: save the new todo
    // TODO: update the list of todos displayed on page
    // TODO: reset the form

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
