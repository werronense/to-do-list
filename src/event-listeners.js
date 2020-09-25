import { createOption } from './project-selector.js';
import { saveProject, saveTodo } from './save-data.js';
import { toggleProjectForm, toggleTodoForm } from './toggle.js';
import { todoFactory } from './objects.js';


function setSelectSubmitEventListener() {
  const projectSelectForm = document.querySelector('.select-project-form');

  projectSelectForm.addEventListener('submit', e => {
    e.preventDefault();

    data.current = e.target['project'].value;
    localStorage.setItem('current', e.target['project'].value);
  });
}


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

  todoForm.addEventListener('submit', e => {
    e.preventDefault();
    saveTodo(todoFactory(
      e.target['title'].value,
      e.target['description'].value,
      e.target['due-date'].value,
      e.target['priority'].value
    ));
    // TODO: update the list of todos displayed on page
    todoForm.reset();
    toggleTodoForm();
  });
}


function setEventListeners() {
  const projectButton = document.querySelector('.project-button');
  const todoButton = document.querySelector('.todo-button');

  projectButton.addEventListener('click', toggleProjectForm);
  todoButton.addEventListener('click', toggleTodoForm);

  setSelectSubmitEventListener();
  setProjectSubmitEventListener();
  setTodoSubmitEventListener();
}


export { setEventListeners };
