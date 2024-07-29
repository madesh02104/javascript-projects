import backgroundImage from './home-background-image.jpg';

export function createHomepageContent() {
    const contentDiv = document.getElementById('content');
  
    const headline = document.createElement('h1');
    headline.textContent = 'Flavors that Funkify Your Fork!';
  
    const text = document.createElement('p');
    text.textContent = 'Our food makes your taste-buds go crazy for more cravings.';
  
    contentDiv.appendChild(headline);
    contentDiv.appendChild(text);
  }
  