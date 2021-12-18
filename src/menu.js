import navTabs from ".";

export function menuTab() {
  const menuList = document.createElement('ul');
    menuList.id = 'menuList';

  const appetizers = document.createElement('li');
    appetizers.textContent = 'Appetizer';

  const entrees = document.createElement('li');
    entrees.textContent = 'Entree';

  const dessert = document.createElement('li');
    dessert.textContent = 'Sweet Tooth';

  const menuItems = [appetizers,entrees, dessert];

  const dataContainer = document.getElementById('dataContainer');
    dataContainer.replaceChildren();
  navTabs();

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.add('menuTitles');
    menuList.appendChild(menuItems[i]);
  }

  dataContainer.appendChild(menuList);
}