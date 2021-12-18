import { aboutTab } from './about.js';
import { contactUsTab } from './contactUs.js';
import { menuTab } from './menu.js';
import './style.css';

const container = document.getElementById('content');

export default function navTabs() {
  const dataContainer = document.createElement('div');
    dataContainer.id = 'dataContainer';

  const tabs = document.createElement('div');
    tabs.setAttribute('id', 'nav');

  const aboutButton = document.createElement('button');
    aboutButton.classList.add('tabs');
    aboutButton.id = 'about';
    aboutButton.addEventListener('click', aboutTab);
    aboutButton.textContent = 'About';

  const menuButton = document.createElement('button');
    menuButton.classList.add('tabs');
    menuButton.id = 'menu';
    menuButton.addEventListener('click', menuTab);
    menuButton.textContent = 'Menu';

  const contactButton = document.createElement('button');
    contactButton.classList.add('tabs');
    contactButton.id = 'contact';
    contactButton.addEventListener('click', contactUsTab);
    contactButton.textContent = 'Contact Us';
  tabs.append(aboutButton);
  tabs.append(menuButton);
  tabs.append(contactButton);
  container.appendChild(tabs);
  container.appendChild(dataContainer);
  aboutTab();
};
navTabs();
