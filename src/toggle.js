function toggleHidden(elements) {
  elements.forEach(element => element.classList.toggle('hidden'));
}


function toggleProjectForm() {
  const projectButton = document.querySelector('.project-button');
  const projectForm = document.querySelector('.project-form');

  toggleHidden([projectButton, projectForm]);
}


function toggleTodoForm() {
  const todoButton = document.querySelector('.todo-button');
  const todoForm = document.querySelector('.todo-form');

  toggleHidden([todoButton, todoForm]);
}


export { toggleProjectForm, toggleTodoForm };
