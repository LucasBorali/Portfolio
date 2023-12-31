import sneaker from './sneakers-product-page.png';
import notificationPage from './notifications-page.png';
import caraECommerce from './cara-e-commerce.png';
import carRental from './car-rental-app.png';
import losAngelesMountains from './los-angeles-mountains.png'

import html from './html-1.svg';
import css from './css-3.svg';
import js from './javascript-1.svg';
import react from './react-2.svg';
import git from './git.svg';
import responsive from './responsive.svg';
import communication from './communication.png';
import problemSolving from './problem-solving.png';
import attentionDetails from './attention-details.png';
import timeMenagement from './time-menagement.png';
import teamWork from './team-work.png';
import adaptability from './adaptability.png';
import creativity from './creativity.png';
import criticalThinking from './critical-thinking.png';
import firebase from './firebase-2.svg';

export const projects = [
  {
    img: carRental,
    repo: 'https://github.com/LucasBorali/car-rental',
    website: 'https://car-rental-ec71e.web.app/',
    stack: [html, css, js, react, firebase],
    title: 'Car rental',
    description: `A user-friendly and fully responsive car rental platform that offers a seamless experience for users looking to rent vehicles; Additionally, the platform offers a direct means of communication by allowing users to easily get in touch with the company's team if they require assistance or have inquiries.`,
  },
  {
    img: caraECommerce,
    repo: 'https://github.com/LucasBorali/cara-e-commerce',
    website: 'https://lucasborali.github.io/cara-e-commerce/',
    stack: [html, css, js, react, firebase],
    title: 'Cara e-commerce',
    description: `Immerse yourself in a sleek and captivating design that seamlessly blends form and function. Explore a diverse range of products with ease, accompanied by an intuitive navigation system. Enjoy a visually appealing and user-friendly interface that elevates your online shopping journey to new heights.`,
  },
  {
    img: losAngelesMountains,
    repo: 'https://github.com/LucasBorali/los-angeles-mountains',
    website: 'https://los-angeles-mountains.web.app',
    stack: [html, css, js, react, firebase],
    title: 'Los Angeles Mountains',
    description: `Elegant simple page application of what might be a touristic expedition. The main idea was to implement a carousel of images an make it a reusable component.`,
  },
  {
    img: sneaker,
    repo: 'https://github.com/LucasBorali/sneakers-product-page',
    website: 'https://lucasborali.github.io/sneakers-product-page/',
    stack: [html, css, js, react],
    title: 'Sneakers Product Page',
    description: `As you're about to see, 'Sneakers product page' is, for now, pretty much what the name says: a product page. At first, the prompt was to just recreate the design with no fancy interactions, but I have built this product page to be a component that can be easily connected to an API or any other kind of data bank.`,
  },
  {
    img: notificationPage,
    repo: 'https://github.com/LucasBorali/notifications-page-main',
    website: 'https://lucasborali.github.io/notifications-page-main/',
    stack: [html, css, js],
    title: 'Notifications page',
    description:
      'A notification component that can be easily integrated on any kind of social app.',
  },
];

export const icons = [
  communication,
  problemSolving,
  attentionDetails,
  timeMenagement,
  teamWork,
  adaptability,
  creativity,
  criticalThinking,
];

export const hardSkillIcons = [html, css, js, react, git, responsive, firebase];
