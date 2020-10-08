function convertDate(input) {
  const date = input.split('-').map(item => +item);
  date[1] -= 1;

  return new Date(date[0], date[1], date[2]);
}


function todoFactory(title, description, dueDate, priority, completed=false) {
  const date = convertDate(dueDate);

  return { title, description, date, priority, completed };
}

export { todoFactory };
