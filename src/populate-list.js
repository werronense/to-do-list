import { toggleDescription } from './toggle.js';

function populateList() {
  const heading = document.querySelector('.list-title');
  const list = document.querySelector('.todo-list');
  const todos = data.todos[data.current];

  list.innerHTML = '';

  heading.textContent = data.current.slice(0,1).toUpperCase() +
    data.current.slice(1);

  todos.forEach(todo => {
    const li = document.createElement('li');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const button = document.createElement('button');
    const span = document.createElement('span');

    p1.textContent =
      `${todo.title} -- due: ${todo.dueDate} -- priority: ${todo.priority}`;

    button.classList.add('description')
    button.textContent = "show description";
    button.addEventListener('click', e => {
      if (e.target.textContent.includes('show')) {
        e.target.textContent = "hide description\t";
        e.target.nextSibling.textContent = todo.description;
      } else {
        e.target.textContent = "show description";
        e.target.nextSibling.textContent = '';
      }
    });

    li.appendChild(p1);

    p2.appendChild(button);
    p2.appendChild(span);
    li.appendChild(p2);

    list.appendChild(li);
  });
}

export { populateList };
