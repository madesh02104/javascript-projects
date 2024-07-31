import backgroundImage from './home-background-image.jpg';

export function createHomepageContent() {
  const contentDiv = document.getElementById('content');

  const headline = document.createElement('h1');
  headline.textContent = 'Flavors that Funkify Your Fork!';

  const text1 = document.createElement('p');
  text1.classList.add('text');
  text1.textContent = 'We at Hot Point make sure every bit of your cravings gets what it deserves. Our menu is curated with different cuisines around the globe for you to select from.';

  const text2 = document.createElement('p');
  text2.classList.add('text');
  text2.textContent = 'Enjoy every bit of it as our food makes your taste-buds go crazy for more cravings. Grab a table now to avoid the hassle of waiting and enjoy the food.';

  const bookBtn = document.createElement('button');
  bookBtn.classList.add('book-btn');
  bookBtn.textContent = 'Book Now'

  contentDiv.appendChild(headline);
  contentDiv.appendChild(text1);
  contentDiv.appendChild(text2);
  contentDiv.appendChild(bookBtn);
}
