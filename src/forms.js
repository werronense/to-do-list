function displayForms() {
  const todoForm = document.querySelector('.todo-form');
  const container = document.querySelector('.container');

  if (container.offsetWidth > 500) {
    todoForm.classList.remove('hidden');
  };
}

export { displayForms };
