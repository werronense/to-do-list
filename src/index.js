import './styles.css';
import { populateProjectSelector } from './project-selector.js';
import { setEventListeners } from './event-listeners.js';
import { populateList } from './populate-list.js';
import { displayForms } from './forms.js';

document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
  displayForms();
  populateProjectSelector();
  setEventListeners();
  // populateList();
}
