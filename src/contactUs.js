export function contactUsTab() {

  const dataContainer = document.getElementById('dataContainer');

  const contactForm = document.createElement('div');
    contactForm.id = 'contactDetails';
  const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Want To Chat? Call or Visit Us!';
    contactTitle.id = 'contactTitle';
  const contactInfo = document.createElement('p');
    contactInfo.id = 'contactInfo';
    contactInfo.textContent = `Phone: (800)555-5455 \r\nAddress: 123 Main St. \r\nAnywhere, USA 45678`

  contactForm.appendChild(contactTitle);
  contactForm.appendChild(contactInfo);

  dataContainer.replaceChildren();
  dataContainer.appendChild(contactForm);
}