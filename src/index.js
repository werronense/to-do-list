import './styles.css';
import { populateProjectSelector } from './project-selector.js';

document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
  populateProjectSelector();
}
