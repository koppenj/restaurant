import navTabs from ".";

export function contactUsTab() {

  const dataContainer = document.getElementById('dataContainer');

  const testText = document.createElement('div');
    testText.textContent = 'Hello There General Kenobi';
  dataContainer.replaceChildren();
  dataContainer.appendChild(testText);
}