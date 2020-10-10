function toggleProjectForm() {
  const projectForm = document.querySelector('.project-form');
  const todoForm = document.querySelector('.todo-form');

  projectForm.classList.toggle('hidden');
  if (!Array.from(todoForm.classList).includes('hidden')) {
    todoForm.classList.toggle('hidden');
  }

  projectForm.reset();
  todoForm.reset();
}


function toggleTodoForm() {
  const todoForm = document.querySelector('.todo-form');
  const projectForm = document.querySelector('.project-form');

  todoForm.classList.toggle('hidden');
  if (!Array.from(projectForm.classList).includes('hidden')) {
    projectForm.classList.toggle('hidden');
  }

  projectForm.reset();
  todoForm.reset();
}


function toggleDescription() {
  // delete if not in use
}


export { toggleProjectForm, toggleTodoForm, toggleDescription };
