function saveProject(project) {
  data.todos[project] = {};
  data.current = project;

  // update localStorage
  localStorage.setItem('projects', JSON.stringify(data.todos));
  localStorage.setItem('current', project);
}

export { saveProject };
