function createOption(value) {
  const option = document.createElement('option');
  option.value = option.textContent = value;

  return option;
}


function populateProjectSelector() {
  const select = document.querySelector('.project-selector');
  const projects = Object.keys(data.todos);

  projects.forEach(project => select.appendChild(createOption(project)));
}


export { createOption, populateProjectSelector };
