function createEditButton() {
  const button = document.createElement('button');
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
    todoForm.classList.remove('hidden');
  });

  return button;
}


export { createEditButton };
