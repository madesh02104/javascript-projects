import instagram from './instagram.png'
import twitter from './twitter.png';
import facebook from './facebook.png';

export function createAboutContent() {
    const contentDiv = document.getElementById('content');
   
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    const aboutParagraph1 = document.createElement('p');
    aboutParagraph1.classList.add("para");
    aboutParagraph1.textContent = "Hot Point, a culinary haven nestled in the heart of the city, was born out of a shared passion for authentic Indian flavors. What began as a small family-run eatery has blossomed into a vibrant restaurant, renowned for its delectable dishes and warm hospitality. Our journey has been an exploration of India's diverse culinary landscape, from the fiery spices of the North to the delicate flavors of the South.";

    const aboutParagraph2 = document.createElement('p');
    aboutParagraph2.classList.add("para");
    aboutParagraph2.textContent = "Our commitment to using fresh, high-quality ingredients is unwavering. We believe that the true essence of Indian cuisine lies in the simplicity of flavors and the art of cooking. Our chefs, with their years of experience, meticulously craft each dish, ensuring a symphony of tastes that tantalizes your palate. From the aromatic biryanis to the rich curries, every bite at Hot Point is a celebration of India's culinary heritage.";

    const aboutParagraph3 = document.createElement('p');
    aboutParagraph3.classList.add("para");
    aboutParagraph3.textContent = "Our vision is to become a cherished destination for food lovers, where they can experience the soul of India through our cuisine. We strive to create an ambiance that is as inviting as our food, where friends and families can come together to savor the magic of flavors. Join us on this culinary journey as we continue to explore and innovate, bringing you the best of Indian cuisine.";
   
    const socialMediaIcons = document.createElement('div');
    socialMediaIcons.classList.add('social-media-icons');

    //icons from https://www.flaticon.com/
    const instagramIcon = document.createElement('img');
    instagramIcon.src = instagram;
    instagramIcon.alt = 'Instagram';
    instagramIcon.classList.add('social-icon');

    const twitterIcon = document.createElement('img');
    twitterIcon.src = twitter;
    twitterIcon.alt = 'Twitter';
    twitterIcon.classList.add('social-icon');

    const facebookIcon = document.createElement('img');
    facebookIcon.src = facebook;
    facebookIcon.alt = 'Facebook';
    facebookIcon.classList.add('social-icon');

    aboutContainer.appendChild(aboutParagraph1);
    aboutContainer.appendChild(aboutParagraph2);
    aboutContainer.appendChild(aboutParagraph3);
    socialMediaIcons.appendChild(instagramIcon);
    socialMediaIcons.appendChild(twitterIcon);
    socialMediaIcons.appendChild(facebookIcon);

    aboutContainer.appendChild(socialMediaIcons);

    contentDiv.appendChild(aboutContainer);
}
