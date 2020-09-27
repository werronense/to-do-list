function populateList() {
  const heading = document.querySelector('.list-title');
  const list = document.querySelector('.todo-list');
  const todos = data.todos[data.current];

  list.innerHTML = '';

  heading.textContent = data.current.slice(0,1).toUpperCase() +
    data.current.slice(1);

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent =
      `${todo.title} -- due: ${todo.dueDate} -- priorty: ${todo.priority}`;

    list.appendChild(li);
  });
}

export { populateList };
