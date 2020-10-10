function displayForms() {
  const todoForm = document.querySelector('.todo-form');
  const container = document.querySelector('.container');

  if (container.offsetWidth > 500) {
    todoForm.classList.remove('hidden');
  };
}


function prefillTodoForm(details) {
  const formTitle = document.querySelector(".title input");
  const formDescription = document.querySelector(".description input");
  const formDueDate = document.querySelector(".due-date input");
  const formPriority = document.querySelector(".priority select");

  formTitle.value = details.title;
  formDescription.value = details.description;
  formDueDate.value = details.date.substring(0, 10);
  formPriority.value = details.priority;

  formTitle.focus();
}


export { displayForms, prefillTodoForm };
