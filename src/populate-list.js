import { toggleDescription } from './toggle.js';
import { saveTodoList } from './save-data.js';
import { createAnchor } from './elements.js';
import { createEditButton, createDeleteButton } from './buttons.js';


function capitalizeFirstWord(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}


function createCheckbox(index) {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('data-index', index);

  // complete the event listener
  checkbox.addEventListener('change', e => {
    const index = e.target.dataset.index;
    // targets the title, which is the next sibling of the checkbox
    e.target.nextSibling.classList.toggle('completed');

    data.todos[data.current][index].completed =
      !data.todos[data.current][index].completed;

    saveTodoList();
  });

  return checkbox;
}


function createHeader(text) {
  const header = document.createElement('h3');

  header.classList.add('todo-title');
  header.textContent = capitalizeFirstWord(text);

  return header;
}


function createHeaderDiv(text, index) {
  const div = document.createElement('div');
  const header = createHeader(text);
  const a = createAnchor();

  div.classList.add('todo-item-main');

  div.appendChild(createCheckbox(index));
  div.appendChild(header);

  div.appendChild(createDeleteButton(index));
  a.appendChild(createEditButton(index));
  div.appendChild(a);

  return div;
}


function createParagraph(text) {
  const p = document.createElement('p');
  p.textContent = text;

  return p;
}


function formatDate(string) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const date = new Date(string);
  const dateString = `${days[date.getDay()]}, ${months[date.getMonth()]}
  ${date.getDate()}, ${date.getFullYear()}`;

  return dateString;
}


function createDetailsDiv(obj) {
  const div = document.createElement('div');
  div.classList.add('todo-description', 'hidden');

  const p1 = createParagraph(`Due: ${formatDate(obj.date)}`);
  const p2 = createParagraph(`Priority: ${obj.priority}`);
  const p3 = createParagraph(`Description: ${obj.description}`);

  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);

  return div;
}


function createButton(detailsDiv) {
  const button = document.createElement('button');
  button.classList.add('button', 'small-button', 'details');
  button.textContent = "show details";

  button.addEventListener('click', e => {
    if (e.target.textContent.includes('show')) {
      e.target.textContent = "hide details";
      detailsDiv.classList.toggle('hidden');
    } else {
      e.target.textContent = "show details";
      detailsDiv.classList.toggle('hidden');
    }
  });

  return button;
}


function createTodoItem(todo, index) {
  const li = document.createElement('li');
  const div = createDetailsDiv(todo);
  const button = createButton(div);

  li.setAttribute('data-index', index);
  li.addEventListener('click', e => {
    data.todoIndex = +li.dataset.index;
  })

  li.appendChild(createHeaderDiv(todo.title, index));
  li.appendChild(div);
  li.appendChild(button);

  return li;
}


function updateHeading(project) {
  const heading = document.querySelector('.list-title');
  const b = document.createElement('b');

  heading.textContent = "Current List: ";
  b.textContent = capitalizeFirstWord(data.current);
  heading.appendChild(b);
}


function populateList() {
  const list = document.querySelector('.todo-list');
  const todos = data.todos[data.current];

  updateHeading(data.current);
  list.innerHTML = '';

  todos.forEach((todo, i) => {
    // convert date strings to objects
    todo.date = new Date(todo.date);
    list.appendChild(createTodoItem(todo, i));
  });
}

export { populateList };
