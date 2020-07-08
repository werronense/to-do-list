import './styles.css';
import { populateProjectSelector } from './project-selector.js';
import { setEventListeners } from './event-listeners.js';

document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
  populateProjectSelector();
  setEventListeners();
}
