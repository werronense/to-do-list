import { toggleDescription } from './toggle.js';


function capitalizeFirstWord(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}


function populateList() {
  const heading = document.querySelector('.list-title');
  const list = document.querySelector('.todo-list');
  const todos = data.todos[data.current];
  const b = document.createElement('b');

  list.innerHTML = '';

  heading.textContent = "Current List: ";
  b.textContent = capitalizeFirstWord(data.current);
  heading.appendChild(b);

  todos.forEach(todo => {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const button = document.createElement('button');

    h3.textContent = capitalizeFirstWord(todo.title);

    button.classList.add('details')
    button.textContent = "show details";

    div.classList.add('hidden');

    p1.textContent = `Due: ${todo.dueDate}`;
    p2.textContent = `Priority: ${todo.priority}`;
    p3.textContent = `Description: ${todo.description}`;

    button.addEventListener('click', e => {
      if (e.target.textContent.includes('show')) {
        e.target.textContent = "hide details";
        div.classList.toggle('hidden');
      } else {
        e.target.textContent = "show details";
        div.classList.toggle('hidden');
      }
    });

    li.appendChild(h3);

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    li.appendChild(div);

    li.appendChild(button);

    list.appendChild(li);
  });
}

export { populateList };
