function createAnchor(href="#top") {
  const a = document.createElement('a');
  a.setAttribute('href', href);

  return a;
}


export { createAnchor };
