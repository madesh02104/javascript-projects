import './style.css';
import { createHomepageContent } from './home.js';

const homeBtn = document.querySelector(".home-btn");
document.addEventListener("DOMContentLoaded", createHomepageContent);