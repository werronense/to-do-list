function createEditButton() {
  const button = document.createElement('button');
  button.classList.add('button', 'small-button', 'todo-edit-button');
  button.textContent = 'edit';

  // TODO: add the event listener

  return button;
}


export { createEditButton };
