import navTabs from ".";

export function contactUsTab() {

  const container = document.getElementById('content');
  container.replaceChildren();
  navTabs();
  const testText = document.createElement('div');
    testText.textContent = 'Hello There General Kenobi';

  container.appendChild(testText);
}