import './style.css';
import { createHomepageContent } from './home.js';
import { createMenuContent } from './menu.js';
import { createAboutContent } from './about.js';

const contentDiv = document.getElementById('content');
const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const aboutBtn = document.querySelector('.about-btn');

document.addEventListener("DOMContentLoaded", () => {
    clearContent();
    createHomepageContent();
});

function clearContent() {
  contentDiv.innerHTML = '';
}

homeBtn.addEventListener('click', () => {
  clearContent();
  createHomepageContent();
  contentDiv.parentElement.classList.remove('menu-page');    

});

menuBtn.addEventListener('click', () => {
  clearContent();
  createMenuContent();
  contentDiv.parentElement.classList.add('menu-page');    
});

aboutBtn.addEventListener('click', () => {
  clearContent();
  createAboutContent();
  contentDiv.parentElement.classList.add('menu-page');    
});


