class Food {
  constructor(name, price, description) {
    this.name = name;
    this.price = '$' + price;
    this.description = description;
  }
}
const chili = new Food('Bowl of Chili', 2.99, 'Our Award Winning sauce. Goes great on everything');
const fries = new Food('French Fries', 4.99, 'Hot & Crispy. Try it with chili, cheese, or both!');
const cheesesticks = new Food('6 pc Cheese Sticks', 6.99, 'Deep fried to perfection');
const hotDog = new Food('Plain Hot Dog', 1.99, `There's nothing plain about this dog`);
const chiliDog = new Food('Chili Dog', 2.99, 'The reason we got into business. Steamed bun, all the works. Are you ready?');
const cheeseBurger = new Food('Cheeseburger', 5.99, 'Made in your vision. Sky is the limit!');
const sundae = new Food('Ice Cream Sundae', 4.99, 'Hope you left room for dessert');
const cheeseCake = new Food('Slice of Cheesecake', 2.99, 'Light & Refreshing');
const iceCream = new Food('Ice Cream (per scoop)', 2, 'Vanilla, Chocolate, Twist');

const apps = [chili, fries, cheesesticks];
const meals = [hotDog, chiliDog, cheeseBurger];
const treats = [sundae, cheeseCake, iceCream];


export function menuTab() {
  const appetizers = document.createElement('div');
    appetizers.id = 'appetizers';

  const entrees = document.createElement('div');
    entrees.id = 'entrees';

  const dessert = document.createElement('div');
    dessert.id = 'dessert';


  const dataContainer = document.getElementById('dataContainer');
  const foodWriter = (menuList) => {
    for (let i = 0; i < menuList.length; i++) {
      // for each food item in an array, append it to the correct section
    }
  }
  dataContainer.replaceChildren();
  dataContainer.appendChild(menuList);
}