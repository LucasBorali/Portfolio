import sneaker from './sneakers-product-page.png';
import ageCalc from './age-calc.png';
import notificationPage from './notifications-page.png';

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

export const projects = [
  {
    img: sneaker,
    repo: 'https://github.com/LucasBorali/sneakers-product-page',
    website: 'https://lucasborali.github.io/sneakers-product-page/',
    stack: [html, css, js, react],
    title: 'Sneakers Product Page',
    description:
      `As you're about to see, 'Sneakers product page' is, for now, pretty much what the name says: a product page. At first, the prompt was to just recreate the design with no fancy interactions, but I have built this product page to be a component that can be easily connected to an API or any other kind of data bank. Well, it's still at the development stage however, soon it's going to be a real e-commerce`,
  },
  {
    img: ageCalc,
    repo: 'https://github.com/LucasBorali/age-calculator-app-main',
    website: 'https://lucasborali.github.io/age-calculator-app-main/',
    stack: [html, css, js],
    title: 'Age Calculator App',
    description:
      'Have you ever wondered how much time you lived until now? Well, with this app you can finally know. Give it a try!',
  },
  {
    img: notificationPage,
    repo: 'https://github.com/LucasBorali/notifications-page-main',
    website: 'https://lucasborali.github.io/notifications-page-main/',
    stack: [html, css, js],
    title: 'Notifications page',
    description:
      "A notification component that can be easily integrated on any kind of social app.",
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

export const hardSkillIcons = [html, css, js, react, git, responsive];
