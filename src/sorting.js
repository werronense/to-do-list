function sortByDate(array) {
  return array.sort((a, b) => a.date > b.date);
}

export { sortByDate };
