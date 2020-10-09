function createEditButton(index) {
  const button = document.createElement('button');
  const i = index;

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

    // prefill the todo form with the existing information
    // TODO: refactor into a separate function -- prefillTodoForm() in forms.js
    const todoDetails = data.todos[data.current][i];
    const formTitle = document.querySelector(".title input");
    const formDescription = document.querySelector(".description input");
    const formDueDate = document.querySelector(".due-date input");
    const formPriority = document.querySelector(".priority select");

    formTitle.value = todoDetails.title;
    formDescription.value = todoDetails.description;
    formDueDate.value = todoDetails.date.substring(0, 10);
    formPriority.value = todoDetails.priority;

    formTitle.focus();
    // end of form prefill code
    todoForm.classList.remove('hidden');
  });

  return button;
}


export { createEditButton };
