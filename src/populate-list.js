import { toggleDescription } from './toggle.js';

function populateList() {
  const heading = document.querySelector('.list-title');
  const list = document.querySelector('.todo-list');
  const todos = data.todos[data.current];

  list.innerHTML = '';

  heading.innerHTML = `Current List: <b>
    ${data.current.slice(0,1).toUpperCase() + data.current.slice(1)}</b>`;

  todos.forEach((todo, i) => {
    const li = document.createElement('li');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const button = document.createElement('button');

    p1.textContent =
      `${todo.title} -- due: ${todo.dueDate} -- priority: ${todo.priority}`;

    button.classList.add('description')
    button.textContent = "show description";

    p2.classList.add(`item-${i}-details`, 'hidden');
    p2.textContent = todo.description;

    button.addEventListener('click', e => {
      if (e.target.textContent.includes('show')) {
        e.target.textContent = "hide description";
        p2.classList.toggle('hidden');
      } else {
        e.target.textContent = "show description";
        p2.classList.toggle('hidden');
      }
    });

    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(button);

    list.appendChild(li);
  });
}

export { populateList };
