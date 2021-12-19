export function aboutTab() {
  const about = document.createElement('p');
    about.setAttribute('id', 'about');
    about.innerHTML = `Welcome to the home of flavor<br>For 25 years, Stoney's Coneys has been a mainstay of the boardwalk community. Make sure to check out our specials<br> Hungry Yet?`;

  const tagline = document.createElement('p');
    tagline.setAttribute('id', 'tagline');
    tagline.innerHTML = `<q>Nothing gets you feeling higher than our Famous Dogs!</q><br>-Owner, Steve Stoney`;

  const contact = document.createElement('section');
    contact.setAttribute('id', 'contact');
    contact.innerHTML = `Contact Us<br>Lorem ipsum dolor sit amet, no per quando graeco mollis, at ullum argumentum persequeris cum, cum mutat tibique ea. Per iriure adipisci referrentur id, at ferri tractatos abhorreant vis. Dicunt elaboraret vis ad. Usu alienum comprehensam eu, cum posse eruditi an, nam laboramus maiestatis eu.
      Pro ea probo omnis insolens. Dicant propriae efficiantur vis eu, est ea vide altera. Est quando tantas fastidii no. Has libris ocurreret ea, volumus tibique partiendo in vix. Ne gubergren liberavisse pri, his id sonet gloriatur, cum ex justo splendide. Antiopam partiendo ea mel.`

  const dataContainer = document.getElementById('dataContainer');
  dataContainer.replaceChildren();
  dataContainer.appendChild(about);
  dataContainer.appendChild(tagline);
}