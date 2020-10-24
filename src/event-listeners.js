import { createOption } from './project-selector.js';
import { saveProject, saveTodo, updateTodo } from './save-data.js';
import { toggleProjectForm, toggleTodoForm } from './toggle.js';
import { todoFactory } from './objects.js';
import { populateList } from './populate-list.js';


function setSelectEventListener() {
  const projectSelectForm = document.querySelector('.project-selector');

  projectSelectForm.addEventListener('change', e => {
    data.current = e.target.value;
    localStorage.setItem('current', e.target.value);
    populateList();
  });
}


function setProjectSubmitEventListener() {
  const projectForm = document.querySelector('.project-form');
  const todoForm = document.querySelector('.todo-form');
  const projectSelector = document.querySelector('.project-selector');
  projectSelector.value = localStorage.getItem('current') ||
    data.current;

  projectForm.addEventListener('submit', e => {
    e.preventDefault();
    saveProject(e.target['project-name'].value);
    projectSelector.appendChild(createOption(e.target['project-name'].value));
    projectSelector.value = e.target['project-name'].value;

    projectForm.reset();
    todoForm.reset();

    toggleProjectForm();
    populateList();
  });
}

function setTodoSaveEventListener() {
  const createTodoButton =
    document.querySelector(".todo-form .create-todo-button");
  const todoForm = document.querySelector('.todo-form');
  const projectForm = document.querySelector('.project-form');

  createTodoButton.addEventListener('click', e => {
    e.preventDefault();

    saveTodo(todoFactory(
      todoForm['title'].value,
      todoForm['description'].value,
      todoForm['due-date'].value,
      todoForm['priority'].value
    ));
    populateList();

    todoForm.reset();
    projectForm.reset();

    toggleTodoForm();
  });
}


function setTodoChangeEventListener() {
  const changeTodoButton =
    document.querySelector(".todo-form .change-todo-button");
  const createTodoButton =
    document.querySelector(".todo-form .create-todo-button");
  const todoForm = document.querySelector('.todo-form');
  const projectForm = document.querySelector('.project-form');

  changeTodoButton.addEventListener('click', e => {
    e.preventDefault();

    updateTodo(todoFactory(
      todoForm['title'].value,
      todoForm['description'].value,
      todoForm['due-date'].value,
      todoForm['priority'].value
    ));
    populateList();

    todoForm.reset();
    projectForm.reset();

    changeTodoButton.classList.add('hidden');
    createTodoButton.classList.remove('hidden');

    toggleTodoForm();
  });
}


function setEventListeners() {
  const projectButton = document.querySelector('.project-button');
  const todoButton = document.querySelector('.todo-button');

  projectButton.addEventListener('click', toggleProjectForm);
  todoButton.addEventListener('click', toggleTodoForm);

  setSelectEventListener();
  setProjectSubmitEventListener();
  setTodoSaveEventListener();
  setTodoChangeEventListener();
}


export { setEventListeners };
