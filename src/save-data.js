import { sortByDate } from './sorting.js';


function saveTodoList() {
  localStorage.setItem('projects', JSON.stringify(data.todos));
}


function saveProject(project) {
  data.todos[project] = [];
  data.current = project;

  // update localStorage
  saveTodoList();
  localStorage.setItem('current', project);
}


function saveTodo(todo) {
  data.todos[data.current].push(todo);
  data.todos[data.current] = sortByDate(data.todos[data.current]);
  saveTodoList();
}


export { saveProject, saveTodo, saveTodoList };
