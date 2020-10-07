import { sortByDate } from './sorting.js';


function saveProject(project) {
  data.todos[project] = [];
  data.current = project;

  // update localStorage
  localStorage.setItem('projects', JSON.stringify(data.todos));
  localStorage.setItem('current', project);
}


function saveTodo(todo) {
  data.todos[data.current].push(todo);
  data.todos[data.current] = sortByDate(data.todos[data.current]);
  localStorage.setItem('projects', JSON.stringify(data.todos));
}


export { saveProject, saveTodo };
