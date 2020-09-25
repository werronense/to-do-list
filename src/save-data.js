function saveProject(project) {
  data.todos[project] = [];
  data.current = project;

  // update localStorage
  localStorage.setItem('projects', JSON.stringify(data.todos));
  localStorage.setItem('current', project);
}


function saveTodo(todo) {
  data.todos[data.current].push(todo);
  localStorage.setItem('projects', JSON.stringify(data.todos));
}


export { saveProject, saveTodo };
