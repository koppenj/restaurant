import navTabs from ".";

export function contactUsTab() {

  const dataContainer = document.getElementById('dataContainer');
    dataContainer.replaceChildren();
  navTabs();
  const testText = document.createElement('div');
    testText.textContent = 'Hello There General Kenobi';

  dataContainer.appendChild(testText);
}