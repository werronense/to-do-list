function createOption(value) {
  const option = document.createElement('option');
  option.value = option.textContent = value;

  return option;
}


function populateProjectSelector() {
  const select = document.querySelector('.project-selector');
  // get the project list from localStorage or the fallback data object
  const projects = localStorage.getItem('projects') || Object.keys(data.todos);

  projects.forEach(project => select.appendChild(createOption(project)));
}


export { populateProjectSelector };
